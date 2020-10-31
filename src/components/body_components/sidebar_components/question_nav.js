import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const QuestionNav = () => {
  return(
    <div className='question-nav'>
      <ButtonGroup orientation='vertical' color='primary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>

      </ButtonGroup>
    </div>
  )
}

export default QuestionNav;