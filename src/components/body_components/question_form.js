import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const QuestionForm = (props) => {

  const { currentQuestionInfo, changeQuestionStatus, shuffledChoices } = props;
  const [ currentSelection, changeSelection ] = React.useState();
  
  const submitAnswer = () => {
    const correctAnswer = currentQuestionInfo['correct'];
    changeQuestionStatus(correctAnswer === currentSelection)
  }

  const formControlLabels = shuffledChoices.map((choice) => {
    return <FormControlLabel value={choice} control={<Radio/>} label={choice}/>
  })

  return(
    <div className='question-display'>
      <p>{currentQuestionInfo['question']}</p>
      <FormControl component='fieldset'>
        <RadioGroup value={currentSelection} onChange={changeSelection}>
          {formControlLabels}
        </RadioGroup>
      </FormControl>
      <Button variant='contained' color='secondary' onClick={submitAnswer}>Submit</Button>
    </div>
  )
}

export default QuestionForm;