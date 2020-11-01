import React from 'react';
import Header from './header';
import Body from './body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#ffffff'
    }
  },
})

const App = () => (
  <ThemeProvider theme={appTheme}>
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  </ThemeProvider>
)

export default App;