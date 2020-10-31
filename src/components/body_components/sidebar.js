import React from 'react';
import QuestionNav from './sidebar_components/question_nav';
import GameSubmitButton from './sidebar_components/game_submit_button';

const Sidebar = (props) => (
  <div className='sidebar'>
    <QuestionNav questionStatuses={props.questionStatuses}/>
    <GameSubmitButton/>
  </div>
)

export default Sidebar;