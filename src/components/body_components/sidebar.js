import React from 'react';
import QuestionNav from './sidebar_components/question_nav';
import GameSubmitButton from './sidebar_components/game_submit_button';
import StatusDisplay from './sidebar_components/status_display';

const Sidebar = (props) => (
  <div className='sidebar'>
    <StatusDisplay questionStatuses={props.questionStatuses}/>
    <QuestionNav questionStatuses={props.questionStatuses}/>
    <GameSubmitButton/>
  </div>
)

export default Sidebar;