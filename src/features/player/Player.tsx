import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayer } from './playerSlice'

interface StyledProps {
  color: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: ({ color }: StyledProps) => color,
    },
    blue: {
      color: theme.palette.primary.main,
    },
    red: {
      color: theme.palette.secondary.main,
    },
  })
)

export const Player = () => {
  const { color, turn } = useSelector(getPlayer)
  const classes = useStyles({ color })

  return (
    <Typography className={classes.player} variant='h6'>
      {turn}
    </Typography>
  )
}
