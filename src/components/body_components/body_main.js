import React from 'react';
import QuestionDisplay from './body_main_components/question_display';
import LandingPage from './body_main_components/landing_page';
import { Switch, Route, withRouter } from 'react-router-dom';

const BodyMain = (props) => {
  const { location, changeQuestionStatus, currentQuestionInfo } = props;

  if(location.pathname === '/'){
    return <LandingPage/>
  }else{
    return <QuestionDisplay changeQuestionStatus={changeQuestionStatus} currentQuestionInfo={currentQuestionInfo}/>
  }
}

export default withRouter(BodyMain);