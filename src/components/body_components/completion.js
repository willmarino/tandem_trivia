import React from 'react';

class Completion extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { questionStatuses } = this.props
    const correctCount = questionStatuses.filter(el => el === 'correct').length;
    const totalCount = questionStatuses.length;
    return(
      <div className='completion'>
        <p>Your score was {correctCount} out of {totalCount}</p>
      </div>
    )
  }
}

export default Completion;