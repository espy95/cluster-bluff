import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getSquareState, setSquareState } from './boardSlice'
import { getPlayer } from '../player/playerSlice'
import { BEAD, SQUARE_SIZE } from '../../utils/constants'
import { Bead } from '../beads/Bead'
import { getBeadAmount, getSelectedColor } from '../beads/beadsSlice'

interface StyledProps {
  selectedColor: BeadType
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    square: {
      cursor: 'pointer',
      textAlign: 'center',
      width: SQUARE_SIZE,
      height: SQUARE_SIZE + 2,
      '&:hover': {
        background: ({ selectedColor }: StyledProps) =>
          `url(${BEAD[selectedColor]}) 0% 0% / ${SQUARE_SIZE}px ${SQUARE_SIZE}px no-repeat`,
      },
    },
  })
)

interface BoardSquareProps {
  id: GridType
}

export const BoardSquare = React.memo((props: BoardSquareProps) => {
  const { id } = props
  const dispatch = useDispatch()
  const selectedColor = useSelector(getSelectedColor)
  const state = useSelector(getSquareState(id))
  const { color } = useSelector(getPlayer)
  const classes = useStyles({ selectedColor })
  const beadAmount = useSelector(getBeadAmount)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const newSquareState = { id: id, selectedColor: selectedColor }
    dispatch(setSquareState(newSquareState))
  }

  return (
    <Button
      variant='outlined'
      size='small'
      className={classes.square}
      onClick={handleClick}
      disabled={beadAmount[selectedColor] === 0 || state !== 'none'}
    >
      <Bead state={state} selected />
    </Button>
  )
})
