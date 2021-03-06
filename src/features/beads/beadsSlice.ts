import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { setBoardSize, setSquareState } from '../board/boardSlice'
import { BEADS, BEADS_AMOUNT } from '../../utils/constants'

interface BeadsState {
  amounts: AmountType
  selectedColor: BeadType
}

const initialState: BeadsState = {
  amounts: {},
  selectedColor: 'Red',
}

export const beadsSlice = createSlice({
  name: 'beads',
  initialState,
  reducers: {
    selectColor: (state, action: PayloadAction<BeadType>) => {
      state.selectedColor = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setBoardSize, (state, action) => {
        BEADS.forEach(bead => {
          state.amounts[bead] = BEADS_AMOUNT[action.payload]
        })
        state.selectedColor = initialState.selectedColor
      })
      .addCase(setSquareState, (state, action) => {
        state.amounts[state.selectedColor] -= 1
        if (state.amounts[state.selectedColor] === 0) {
          BEADS.forEach(bead => {
            if (state.amounts[state.selectedColor] === 0 && state.amounts[bead] > 0) {
              state.selectedColor = bead
            }
          })
        }
      })
  },
})

export const { selectColor } = beadsSlice.actions

export const getSelectedColor = ({ beads }: RootState) => beads.selectedColor
export const getBeadAmount = ({ beads }: RootState) => beads.amounts
export const getBeadsSidebar = ({ beads }: RootState) => {
  return (Object.entries(beads.amounts) as [BeadType, number][]).reduce(
    (result: BeadType[], entity: [BeadType, number]) => {
      result.push(...Array(entity[1]).fill(entity[0]))
      return result
    },
    []
  )
}

export default beadsSlice.reducer
