import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { BOARD_SIZES, DIRECTIONS, FLIPPED_BEADS } from '../../utils/constants'

interface BoardState {
  squares: SquareType
  size: number
}

const initialState: BoardState = {
  squares: [],
  size: BOARD_SIZES.Small,
}

interface SquareStateAction {
  id: GridType
  selectedColor: BeadType
}

const checkSquareState = (id: GridType) => ({ board }: RootState) => {
  const dispatch = useDispatch()
  const { row, col } = id
  if (board.squares[row][col]) {
    if (
      row > 0 &&
      col > 0 &&
      board.squares[row - 1][col] !== 'none' &&
      board.squares[row][col - 1] !== 'none'
    ) {
      dispatch(flipSquare(id))
    }
  }
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setSquareState: (state, action: PayloadAction<SquareStateAction>) => {
      const { id, selectedColor } = action.payload
      state.squares[id.row][id.col] = selectedColor
      checkSquareState(id)
    },
    flipSquare: (state, action: PayloadAction<GridType>) => {
      const { row, col } = action.payload
      state.squares[row][col] += 'Flipped'
    },
    setBoardSize: (state, action: PayloadAction<BoardType>) => {
      state.size = BOARD_SIZES[action.payload]
      const newSquares: SquareType = []
      for (let row = 0; row < BOARD_SIZES[action.payload]; row++) {
        newSquares.push([])
        for (let col = 0; col < BOARD_SIZES[action.payload]; col++) {
          newSquares[row].push('none')
        }
      }
      state.squares = newSquares
    },
  },
})

export const { setSquareState, flipSquare, setBoardSize } = boardSlice.actions

export const getBoardSize = ({ board }: RootState) => board.size
export const getBoardGrid = ({ board }: RootState) => {
  const grid: number[][] = []
  for (let i = 0; i < board.size; i++) {
    grid.push([])
    for (let j = 0; j < board.size; j++) {
      grid[i].push(j + 1 + i * board.size)
    }
  }
  return grid
}

const isValid = ({ row, col }: GridType, size: number): boolean =>
  row >= 0 && col >= 0 && row < size && col < size

const isOpen = (board: BoardState, id: GridType): boolean =>
  DIRECTIONS.reduce((result: boolean, d: GridType) => {
    const next = { row: d.row + id.row, col: d.col + id.col }
    if (isValid(next, board.size) && board.squares[next.row][next.col] === 'none') result = true
    return result
  }, false)

export const getSquareState = (id: GridType) => ({ board }: RootState): BeadType =>
  board.squares.length > 0
    ? isOpen(board, id)
      ? board.squares[id.row][id.col]
      : FLIPPED_BEADS[board.squares[id.row][id.col]]
    : 'none'

export default boardSlice.reducer
