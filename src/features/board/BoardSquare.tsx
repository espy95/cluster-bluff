import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getSquareState, setSquareState } from './boardSlice'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {},
    square: {
      border: '1px solid',
      textAlign: 'center',
      width: theme.spacing(4),
      height: theme.spacing(4),
      '&:hover': {
        background: theme.palette.secondary.main,
      },
    },
  })
)

interface BoardSquareProps {
  id: number
}

export const BoardSquare = (props: BoardSquareProps) => {
  const { id } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const state = useSelector(getSquareState(id))
  return (
    <div onClick={() => dispatch(setSquareState(id))} className={classes.square}>
      <Typography>{state}</Typography>
    </div>
  )
}
