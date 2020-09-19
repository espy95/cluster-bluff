import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Board, HeaderBar } from '../features'

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      contrastText: '#000',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Board />
    </ThemeProvider>
  )
}

export default App
