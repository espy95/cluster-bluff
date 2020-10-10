import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { BEAD, SQUARE_SIZE } from '../../utils/constants'
import { useSelector } from 'react-redux'
import { getSelectedColor } from './beadsSlice'

interface StyledProps {
  small?: boolean
}

const useStyles = makeStyles(() =>
  createStyles({
    bead: {
      width: ({ small }: StyledProps) => (small ? SQUARE_SIZE / 2 : SQUARE_SIZE),
      opacity: 0.6,
    },
    selected: {
      opacity: 1,
    },
  })
)

interface BeadProps {
  state: BeadType
  selected?: boolean
  small?: boolean
}

export const Bead = React.memo((props: BeadProps) => {
  const { state, selected, small } = props
  const classes = useStyles({ small })
  const selectedColor = useSelector(getSelectedColor)
  const isSelected = selected || selectedColor === state

  if (state === 'none') {
    return <div />
  } else {
    return (
      <img
        src={BEAD[state]}
        className={clsx(classes.bead, isSelected && classes.selected)}
        alt={state}
      />
    )
  }
})
