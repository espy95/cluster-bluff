import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Beads, Board, HeaderBar, Player } from '../features'
import theme from './theme'
import { Grid } from '@material-ui/core'

const App = () => {
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
              <Beads />
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
