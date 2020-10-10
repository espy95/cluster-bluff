import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { getBoardGrid, getBoardSize } from './boardSlice'
import { BoardSquare } from './BoardSquare'
import { SQUARE_SIZE } from '../../utils/constants'
import { getPlayerColor } from '../player/playerSlice'

interface StyledProps {
  size: number
  color: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: ({ size }: StyledProps) => size * (SQUARE_SIZE + 2),
      border: ({ color }: StyledProps) => `solid 2px ${color}`,
      borderRadius: theme.spacing(1),
    },
  })
)

export const Board = React.memo(() => {
  const size = useSelector(getBoardSize)
  const color = useSelector(getPlayerColor)
  const classes = useStyles({ size, color })
  const grid = useSelector(getBoardGrid)

  return (
    <Paper className={classes.paper}>
      {grid.map((row, rowIndex) => (
        <Grid container key={rowIndex} justify='center' alignItems='center'>
          {row.map((col, colIndex) => (
            <Grid item key={colIndex}>
              <BoardSquare id={{ row: rowIndex, col: colIndex }} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Paper>
  )
})
