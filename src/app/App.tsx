import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { BeadsSidebar, Board, HeaderBar, Player } from '../features'
import theme from './theme'
import { Grid } from '@material-ui/core'
import { setBoardSize } from '../features/board/boardSlice'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setBoardSize('Small'))
  }, [dispatch])
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Grid container direction='column' justify='center' alignItems='center' spacing={1}>
        <Grid item>
          <Player />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <BeadsSidebar />
            </Grid>
            <Grid item>
              <Board />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
