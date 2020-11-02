import React from 'react';
import { withRouter } from 'react-router-dom';
import Sidebar from './body_components/sidebar';
import QuestionDisplay from './body_components/body_main_components/question_display';
import LandingPage from './body_components/body_main_components/landing_page';
import Completion from './body_components/completion';
import quizQuestions from '../quiz_questions';
import { CSSTransition } from 'react-transition-group';

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questionStatuses: new Array(10).fill('unanswered')
    }
    this.changeQuestionStatus = this.changeQuestionStatus.bind(this);
    this.shouldTransition = false;
  }

  componentDidUpdate(prevprops){
    if(prevprops.location.pathname === '/' && this.props.location.pathname !== '/'){
      this.shouldTransition = true;
    }
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
    const { questionStatuses } = this.state;
    const curQuestionIdx = parseInt(location.pathname.split('/')[1], 10);
    let body;
    if(location.pathname === '/'){
      body = <LandingPage/>
    }else if(location.pathname === '/completion'){
      body = <Completion questionStatuses={questionStatuses}/>
    }else{
      body = [
        <Sidebar
          questionStatuses={questionStatuses} key={0}/>, 
        <QuestionDisplay
          changeQuestionStatus={this.changeQuestionStatus(curQuestionIdx - 1)}
          currentQuestionInfo={quizQuestions[curQuestionIdx - 1]}
          key={1}/>
      ]
    }
    return(
      <CSSTransition in={this.shouldTransition} timeout={1000} classNames='fade' appear={true}>
        <div className='body'>
          {body}
        </div>
      </CSSTransition>
    )
  }
}

export default withRouter(Body);