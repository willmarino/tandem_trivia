import React from 'react';
import Sidebar from './body_components/sidebar';
import Question from './body_components/question';

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionStatuses: new Array(10).fill('unanswered')
    }
    this.changeQuestionStatus = this.changeQuestionStatus.bind(this);
  }
  
  changeQuestionStatus(idx){
    return (answerStatus) => {
      let questionStatuses = this.state.questionStatuses;
      questionStatuses[idx] = answerStatus;
      this.setState({ questionStatuses });
    }
  }

  render(){
    return(
      <div className='body'>
        <Sidebar questionStatuses={this.state.questionStatuses}/>
        <Question changeQuestionStatus={this.changeQuestionStatus} />
      </div>
    )
  }
}

export default Body;