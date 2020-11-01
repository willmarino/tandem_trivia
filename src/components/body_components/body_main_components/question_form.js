import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom';

const QuestionForm = (props) => {

  const { currentQuestionInfo, changeQuestionStatus, shuffledChoices } = props;
  const [ currentSelection, changeSelection ] = React.useState(shuffledChoices[0]);

  const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: '20px'
    }
  }));
  const classes = useStyles();
  
  const submitAnswer = () => {
    const correctAnswer = currentQuestionInfo['correct'];
    changeQuestionStatus(correctAnswer === currentSelection)
  }

  const handleChange = (event) => {
    changeSelection(event.target.value);
  }

  const formControlLabels = shuffledChoices.map((choice, i) => {
    return <FormControlLabel value={choice} control={<Radio/>} label={choice} key={i}/>
  })
  const curQuestionNumber = parseInt(props.location.pathname.split('/')[1], 10);
  return(
    <div className='question-form'>
      <p id='qf-header'>Question {curQuestionNumber}</p>
      <p id='qf-question'>{currentQuestionInfo['question']}</p>
      <FormControl component='fieldset'>
        <RadioGroup value={currentSelection} onChange={handleChange}>
          {formControlLabels}
        </RadioGroup>
      </FormControl>
      <Button variant='contained' color='secondary' className={classes.button} onClick={submitAnswer}>Submit</Button>
    </div>
  )
}

export default withRouter(QuestionForm);