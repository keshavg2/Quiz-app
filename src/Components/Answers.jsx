import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames:['','','','']
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
    if(!isAnswered) {

        let elem = e.currentTarget;
        let { correct, increaseScore } = this.props;
        let answer = Number(elem.dataset.id);
        let updatedClassNames = this.state.classNames;

        if(answer === correct){
            updatedClassNames[answer-1] = 'right';
            increaseScore();
        }
        else {
            updatedClassNames[answer-1] = 'wrong';
        }
                this.setState({
            classNames: updatedClassNames
        })
        console.log(updatedClassNames);
        this.props.showButton();
    }
}

componentDidUpdate(prevProps, prevState) {
    if (prevState.classNames !== this.state.classNames) {
        this.setState({
            classNames: ['', '', '', '']
        });
    }
  }


  
  render() {
      let { answers } = this.props;
      
      return (
          <div id="answers">
              <ul>
                    <li onClick={this.checkAnswer}  data-id="1"><span>A</span> <p>{answers[0]}</p></li>
                    <li onClick={this.checkAnswer}  data-id="2"><span>B</span> <p>{answers[1]}</p></li>
                    <li onClick={this.checkAnswer}  data-id="3"><span>C</span> <p>{answers[2]}</p></li>
                    <li onClick={this.checkAnswer}  data-id="4"><span>D</span> <p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers;