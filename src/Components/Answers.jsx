import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;

        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);

            if(answer === correct){
                elem.className = 'right';
                increaseScore();
            }
            else {
                elem.className = 'wrong';
            }
          

          this.props.showButton(); 
      }
  }
 

  
  render() {
      let { answers } = this.props;
      
      let transition = {
          transitionName: "example",
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300
      }
      
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