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
  const [ currentSelection, changeSelection ] = React.useState('theyhaventpickedanything');
  const [ error, changeError ] = React.useState();

  const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: '20px'
    }
  }));
  const classes = useStyles();
  
  const submitAnswer = () => {
    const { history, location } = props;
    if(currentSelection !== 'theyhaventpickedanything'){
      changeError(null);
      const correctAnswer = currentQuestionInfo['correct'];
      changeQuestionStatus(correctAnswer === currentSelection)
      const curQuestionIdx = parseInt(location.pathname.split('/')[1], 10);
      let nextQuestionIdx;
      if(curQuestionIdx < 10){
        nextQuestionIdx = curQuestionIdx + 1
      }else{
        nextQuestionIdx = 1;
      }
      changeSelection('theyhaventpickedanything')
      history.push(`/${nextQuestionIdx}`);
    }else{
      changeError('You must pick an answer');
    }
  }

  const handleChange = (event) => {
    changeSelection(event.target.value);
  }

  const formControlLabels = shuffledChoices.map((choice, i) => {
    return <FormControlLabel value={choice} control={<Radio/>} label={choice} key={i}/>
  })

  const curQuestionNumber = parseInt(props.location.pathname.split('/')[1], 10);

  let submitButton = <Button variant='contained' color='secondary' className={classes.button} onClick={submitAnswer}>Submit</Button>
  if(props.questionStatus !== 'unanswered'){
    submitButton = <Button variant='contained' color='secondary' className={classes.button} onClick={submitAnswer} disabled>Submit</Button>
  }

  return(
    <div className='question-form'>
      <p id='qf-header'>Question {curQuestionNumber}</p>
      <p id='qf-question'>{currentQuestionInfo['question']}</p>
      <FormControl component='fieldset'>
        <RadioGroup value={currentSelection} onChange={handleChange}>
          {formControlLabels}
        </RadioGroup>
      </FormControl>
      {submitButton}
      <p id='error-message'>{error}</p>
    </div>
  )
}

export default withRouter(QuestionForm);