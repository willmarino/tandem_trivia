import React from 'react';
import { withRouter } from 'react-router-dom';
import Sidebar from './body_components/sidebar';
import BodyMain from './body_components/body_main';
import quizQuestions from '../quiz_questions';

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
      questionStatuses[idx] = (answerStatus) ? 'correct' : 'incorrect';
      this.setState({ questionStatuses });
    }
  }

  render(){
    const { location } = this.props;
    const curQuestionIdx = parseInt(location.pathname[location.pathname.length - 1], 10);
    debugger;
    return(
      <div className='body'>
        <Sidebar
          questionStatuses={this.state.questionStatuses}/>
        {/* <QuestionDisplay */}
        <BodyMain
          changeQuestionStatus={this.changeQuestionStatus(curQuestionIdx)}
          currentQuestionInfo={quizQuestions[curQuestionIdx]}/>
      </div>
    )
  }
}

export default withRouter(Body);