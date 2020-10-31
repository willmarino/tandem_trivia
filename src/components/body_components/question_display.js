import React from 'react';

const QuestionDisplay = (props) => {
  return(
    <div>
      {props.currentQuestionInfo['question']}
    </div>
  )
}

export default QuestionDisplay;