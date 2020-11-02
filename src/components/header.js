import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'absolute',
      left: '95%',
      bottom: '5%'
    }
  }));
  const classes = useStyles();
  const handleClick = () => {
    window.open('https://github.com/willmarino/tandem_trivia', '_blank');
  }
  return(
    <div className='header-container'>
      <div className='header'>
        <p>Tandem-Trivia</p>
        <Fab color='primary' className={classes.fab} onClick={ handleClick }>Code</Fab>
      </div>
    </div>
  )
}

export default Header;