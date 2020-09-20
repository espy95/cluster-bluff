import React from 'react'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getBeadAmount } from './beadsSlice'

interface BeadProps {
  color: BeadType
}

export const Amount = (props: BeadProps) => {
  const { color } = props
  const amount = useSelector(getBeadAmount(color))
  return <Typography variant='body1'>Amount left: {amount}</Typography>
}
