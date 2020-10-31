import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const QuestionNav = (props) => {
  const useStyles = makeStyles((theme) => ({
    buttonGroup: {
      width: '100%'
    }
  }))
  const classes = useStyles();

  const navToQuestion = (idx) => {
    return () => {
      props.history.push(`/${idx}`);
    }
  }

  const Buttons = [];
  for(let i = 0; i < 10; i++){
    let variant = 'outlined'
    let color = 'primary'
    switch(props.questionStatuses[i]){
      case 'correct':
        variant = 'contained';
      case 'incorrect':
        variant = 'contained';
        color = 'red';
    }
    Buttons.push(
      <Button variant={variant} color={color} onClick={navToQuestion(i)} key={i}>{`Question ${i + 1}`}</Button>
    )
  }
  return(
    <div className='question-nav'>
      <ButtonGroup orientation='vertical' color='primary' className={classes.buttonGroup}>
        {Buttons}
      </ButtonGroup>
    </div>
  )
}

export default withRouter(QuestionNav);