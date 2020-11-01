import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
  // button: {
  //   width:
  // }
// }))

const LandingPage = (props) => (
  <div className='landing-page'>
    <Button variant='contained' color='secondary' onClick={() => { props.history.push('/1') }}>Begin Trivia</Button>
  </div>
)

export default withRouter(LandingPage);