import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { getBoardSize } from './boardSlice'
import { BoardSquare } from './BoardSquare'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
    },
    square: {
      border: '1px solid',
      textAlign: 'center',
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  })
)

export const Board = () => {
  const classes = useStyles()
  const size = useSelector(getBoardSize)
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
