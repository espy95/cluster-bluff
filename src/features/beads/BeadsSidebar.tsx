import React from 'react'
import { Grid, IconButton, Paper } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getBeadsSidebar, selectColor } from './beadsSlice'
import { Bead } from './Bead'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      padding: 0,
    },
  })
)

export const BeadsSidebar = React.memo(() => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const beads = useSelector(getBeadsSidebar)

  return (
    <Paper>
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
