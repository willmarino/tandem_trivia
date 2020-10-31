import React from 'react';
import Sidebar from './body_components/sidebar';
import Question from './body_components/question';

const Body = () => {
  return(
    <div className='body'>
      <Sidebar/>
      <Question/>
    </div>
  )
}

export default Body;