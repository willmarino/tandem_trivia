import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const GameSubmitButton = (props) => {
  const [ error, changeError ] = React.useState();
  const onClick = () => {
    const { questionStatuses } = props;
    if(questionStatuses.every(el => el !== 'unanswered')){
      props.history.push('/completion')
    }else{
      changeError('You must answer all questions');
    }
  }
  return(
    <>
      <Button variant='contained' color='secondary' onClick={onClick}>Submit Answers</Button>
      <p id='error-message'>{error}</p>
    </>
  )
}

export default withRouter(GameSubmitButton);