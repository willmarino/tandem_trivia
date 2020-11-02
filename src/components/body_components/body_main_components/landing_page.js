import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const LandingPage = (props) => (
  <div className='landing-page'>
    <p>Hello, and welcome to my Trivia App.</p>
    <p>The following quiz has ten questions, each of which only have one correct answer.</p>
    <p id='last-instruction'>Answer all the questions, and then submit your answers to get to the end.</p>
    <Button variant='contained' color='secondary' onClick={() => { props.history.push('/1') }}>Begin Trivia</Button>
  </div>
)

export default withRouter(LandingPage);