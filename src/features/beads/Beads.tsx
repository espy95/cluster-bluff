import React from 'react'
import { Grid, Icon, IconButton, Paper, SvgIcon } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getBoardSize } from '../board/boardSlice'
import { selectBead } from './beadsSlice'
import { BEADS, SQUARE_SIZE } from '../../utils/constants'
import { Bead } from './Bead'
import { Amount } from './Amount'

interface StyledProps {
  size: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: ({ size }: StyledProps) => size * (SQUARE_SIZE + 2),
    },
  })
)

export const Beads = () => {
  const size = useSelector(getBoardSize)
  const classes = useStyles({ size })
  const dispatch = useDispatch()

  return (
    <Paper className={classes.paper}>
      <Grid container direction='column' justify='center' alignItems='center'>
        {BEADS.map((bead, index) => (
          <Grid item key={index}>
            <Grid container justify='center' alignItems='center'>
              <Grid item>
                <Bead color={bead} onClick={() => dispatch(selectBead(bead))} />
              </Grid>
              <Grid item>
                <Amount color={bead} />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
