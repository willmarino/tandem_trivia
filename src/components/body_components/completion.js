import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


class Completion extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const { history } = this.props;
    history.push('/1')
  }

  render(){
    const { questionStatuses } = this.props
    const correctCount = questionStatuses.filter(el => el === 'correct').length;
    const totalCount = questionStatuses.length;
    return(
      <div className='completion'>
        <img src={`${process.env.PUBLIC_URL}/thumbs_up.png`}></img>
        <p>Congratulations on completing the quiz!</p>
        <p id='completion-last-message'>Your score was {correctCount} out of {totalCount}</p>
        <Button color='primary' variant='contained' onClick={this.handleClick}>Try Again</Button>
      </div>
    )
  }
}

export default withRouter(Completion);