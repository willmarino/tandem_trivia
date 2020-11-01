import React from 'react';
import QuestionForm from './question_form';
import { withRouter } from 'react-router-dom';

class QuestionDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shuffledChoices: null
    }
    this.shuffleChoices = this.shuffleChoices.bind(this);
  }

  componentDidMount(){
    const { currentQuestionInfo } = this.props;
    this.setState({ shuffledChoices: this.shuffleChoices(currentQuestionInfo)});
  }

  componentDidUpdate(prevProps){
    const { currentQuestionInfo } = this.props;
    if(this.props.location.pathname !== prevProps.location.pathname){
      this.setState({ shuffledChoices: this.shuffleChoices(currentQuestionInfo)});
    }
  }

  shuffleChoices(currentQuestionInfo){
    const choices = []
    currentQuestionInfo['incorrect'].forEach((choice) => {
      choices.push(choice);
    })
    choices.push(currentQuestionInfo['correct']);

    const shuffledChoices = []
    while(choices.length > 0){
      const randomIdx = Math.floor(Math.random() * choices.length);
      shuffledChoices.push(choices[randomIdx])
      choices.splice(randomIdx, 1);
    }
    return shuffledChoices;
  }

  render(){
    if(!this.state.shuffledChoices){
      return null;
    }
    return(
      <div className='question-display'>
        <QuestionForm
          currentQuestionInfo={this.props.currentQuestionInfo}
          shuffledChoices={this.state.shuffledChoices}
          changeQuestionStatus={this.props.changeQuestionStatus}/>
      </div>
    )
  }

}

export default withRouter(QuestionDisplay);