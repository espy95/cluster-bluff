import React from 'react'
import { Grid, IconButton, Paper } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getBoardSize } from '../board/boardSlice'
import { getBeadsSidebar, selectColor } from './beadsSlice'
import { SQUARE_SIZE } from '../../utils/constants'
import { Bead } from './Bead'

interface StyledProps {
  size: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: ({ size }: StyledProps) => size * (SQUARE_SIZE + 2),
    },
    button: {
      padding: 0,
    },
  })
)

export const BeadsSidebar = React.memo(() => {
  const size = useSelector(getBoardSize)
  const classes = useStyles({ size })
  const dispatch = useDispatch()
  const beads = useSelector(getBeadsSidebar)

  return (
    <Paper className={classes.paper}>
      <Grid container direction='column' justify='center' alignItems='center'>
        {beads.map((bead, index) => (
          <Grid item xs={6} key={index} onClick={() => dispatch(selectColor(bead))}>
            <IconButton className={classes.button}>
              <Bead state={bead} small />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
})
