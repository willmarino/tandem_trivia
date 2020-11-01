import React from 'react';
import { withRouter } from 'react-router-dom';
import Sidebar from './body_components/sidebar';
import QuestionDisplay from './body_components/body_main_components/question_display';
import LandingPage from './body_components/body_main_components/landing_page';
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
    const curQuestionIdx = parseInt(location.pathname.split('/')[1], 10);
    const body = ( curQuestionIdx )
      ? ([
          <Sidebar
            questionStatuses={this.state.questionStatuses} key={0}/>, 
          <QuestionDisplay
            changeQuestionStatus={this.changeQuestionStatus(curQuestionIdx - 1)}
            currentQuestionInfo={quizQuestions[curQuestionIdx - 1]}
            key={1}/>
        ])
      : (<LandingPage/>)
    debugger;
    return(
      <div className='body'>
        {body}
      </div>
    )
  }
}

export default withRouter(Body);