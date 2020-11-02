import React from 'react';
import Header from './header';
import Body from './body';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

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
const App = (props) => {
  const shouldTransition = (props.location.pathname === '/');
  return(
  <ThemeProvider theme={appTheme}>
    <CSSTransition in={shouldTransition} timeout={2000} classNames='fade' appear={true}>
      <div className='app'>
        <Header/>
        <Body/>
      </div>
    </CSSTransition>
  </ThemeProvider>
  )
}

export default withRouter(App);