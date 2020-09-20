import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { getBoardSize } from './boardSlice'
import { BoardSquare } from './BoardSquare'
import { SQUARE_SIZE } from '../../utils/constants'

interface StyledProps {
  size: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: ({ size }: StyledProps) => size * (SQUARE_SIZE + 2),
    },
  })
)

export const Board = () => {
  const size = useSelector(getBoardSize)
  const classes = useStyles({ size })

  const generateGrid = (size: number): number[][] => {
    const grid: number[][] = []
    for (let i = 0; i < size; i++) {
      grid.push([])
      for (let j = 0; j < size; j++) {
        grid[i].push(j + 1 + i * size)
      }
    }
    return grid
  }

  return (
    <Paper className={classes.paper}>
      {generateGrid(size).map((row, index) => (
        <Grid container key={index} justify='center' alignItems='center'>
          {row.map((item, index) => (
            <Grid item key={index}>
              <BoardSquare id={item} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Paper>
  )
}
