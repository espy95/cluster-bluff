import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import beadRed from '../../assets/beads/red/bead-red.png'
import beadRedFlipped from '../../assets/beads/red/bead-red-flipped.png'
import beadBlue from '../../assets/beads/blue/bead-blue.png'
import beadBlueFlipped from '../../assets/beads/blue/bead-blue-flipped.png'
import beadGreen from '../../assets/beads/green/bead-green.png'
import beadGreenFlipped from '../../assets/beads/green/bead-green-flipped.png'
import { SQUARE_SIZE } from '../../utils/constants'
import { IconButton } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getSelectedBead } from './beadsSlice'

const BEAD = {
  Red: beadRed,
  Blue: beadBlue,
  Green: beadGreen,
}

const BEAD_FLIPPED = {
  Red: beadRedFlipped,
  Blue: beadBlueFlipped,
  Green: beadGreenFlipped,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: 0,
    },
    bead: {
      width: SQUARE_SIZE,
      padding: 1,
      opacity: 0.5,
    },
    selected: {
      opacity: 1,
    },
  })
)

interface BeadProps {
  color: BeadType
  onClick: () => {}
  flipped?: boolean
}

export const Bead = (props: BeadProps) => {
  const classes = useStyles()
  const selected = useSelector(getSelectedBead)
  const { color, flipped, onClick } = props
  const isSelected = selected === color

  return (
    <IconButton className={classes.button} onClick={onClick}>
      <img
        src={flipped ? BEAD_FLIPPED[color] : BEAD[color]}
        className={clsx(classes.bead, isSelected && classes.selected)}
      />
    </IconButton>
  )
}
