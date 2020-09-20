import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getSquareState, setSquareState } from './boardSlice'
import { getPlayer } from '../player/playerSlice'
import { SQUARE_SIZE } from '../../utils/constants'

interface StyledProps {
  color: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    square: {
      cursor: 'pointer',
      border: '1px solid',
      textAlign: 'center',
      width: SQUARE_SIZE,
      height: SQUARE_SIZE,
      '&:hover': {
        background: ({color}: StyledProps) => color,
        outline: 'auto'
      },
    },
  })
)

interface BoardSquareProps {
  id: number
}

export const BoardSquare = (props: BoardSquareProps) => {
  const { id } = props
  const dispatch = useDispatch()
  const state = useSelector(getSquareState(id))
  const { color } = useSelector(getPlayer)
  const classes = useStyles({color})

  const handleClick = (): void => {
    dispatch(setSquareState(id))
  }

  return (
    <div onClick={handleClick} className={classes.square}>
      <Typography>{state}</Typography>
    </div>
  )
}
