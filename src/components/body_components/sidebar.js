import React from 'react';
import QuestionNav from './sidebar_components/question_nav';
import GameSubmitButton from './sidebar_components/game_submit_button';

const Sidebar = () => (
  <div className='sidebar'>
    <QuestionNav/>
    <GameSubmitButton/>
  </div>
)

export default Sidebar;