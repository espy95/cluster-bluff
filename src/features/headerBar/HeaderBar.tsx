import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { setBoardSize, getBoardType } from '../board/boardSlice'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export const HeaderBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const boardSize = useSelector(getBoardType)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleClick = (size: BoardType): void => {
    dispatch(setBoardSize(size))
    handleClose()
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography>{boardSize}</Typography>
        <Menu id='menu-appbar' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          <MenuItem onClick={() => handleClick('Small')}>Small</MenuItem>
          <MenuItem onClick={() => handleClick('Medium')}>Medium</MenuItem>
          <MenuItem onClick={() => handleClick('Large')}>Large</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
