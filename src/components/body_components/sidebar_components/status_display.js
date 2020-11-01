import React from 'react';

const StatusDisplay = (props) => {
  let attemptedCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  props.questionStatuses.forEach((status) => {
    if(status === 'correct'){
      correctCount += 1;
      attemptedCount += 1;
    }else if(status === 'incorrect'){
      incorrectCount += 1;
      attemptedCount += 1;
    }
  })
  return(
    <div className='status-display'>
      <p>Attempted: {attemptedCount}</p>
      <p>Correct: {correctCount}</p>
      <p>Incorrect: {incorrectCount}</p>
    </div>
  )
}

export default StatusDisplay;