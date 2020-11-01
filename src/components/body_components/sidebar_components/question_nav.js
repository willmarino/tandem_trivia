import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const QuestionNav = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      }
    },
    buttonGroup: {
      width: '100%'
    },
    errorButton: {
      borderColor: 'red',
      color: 'red',
      '&:hover': {
        borderColor: 'red',
      },
      background: 'white'
    },
    successButton: {
      borderColor: 'green',
      color: 'green',
      '&:hover': {
        borderColor: 'green',
      },
      background: 'white'
    },
    defaultButton: {
      background: 'white'
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
    let className = classes.defaultButton;
    if(props.questionStatuses[i] === 'correct'){
      className = classes.successButton;
    }else if(props.questionStatuses[i] === 'incorrect'){
      className = classes.errorButton;
    }
    Buttons.push(
      <Button variant={variant} color={color} className={className} onClick={navToQuestion(i + 1)} key={i}>{`Question ${i + 1}`}</Button>
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