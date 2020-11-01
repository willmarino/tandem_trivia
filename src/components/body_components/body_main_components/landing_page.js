import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const LandingPage = (props) => (
  <Button variant='contained' color='secondary' onClick={() => { props.history.push('/1') }}>Begin Trivia</Button>
)

export default withRouter(LandingPage);