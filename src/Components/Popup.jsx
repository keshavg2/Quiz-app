import React from 'react';
import '../Styles/Styles.css';


class Popup extends React.Component{
        constructor(props){
            super(props);
                this.state={
                    time:'start',
                    title:'Welcome to start the Quiz',
                    text: 'This is a quiz application built using ReactJS. <br /><br /> Currently it\'s loaded with CSS questions from W3Scools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.',
                    buttonText:'Start the Quiz',
                }
                this.popupHandle=this.popupHandle.bind(this);
        }

        popupHandle(){
            let {time} = this.state;
            
            if(time === 'start'){
                this.setState({
                    time:'end',
                    title:'Congratulations',
                    buttonText:'Restart'
                });
                this.props.startQuiz();
            } else {
                window.location.reload();
            }
        }
        componentWillReceiveProps(nextProps){
            this.setState({
                text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> questions right.'
            });
        }

        createMarkup(text) {
            return {__html: text};
        }

    render(){
        let { text, title, buttonText } = this.state;
        let  { style } = this.props;
        return(
            <div>
                <div className="Popup-container" style={style}>
                 <div className="col-md-8 col-md-offset-2">
                 <div className="Popup">
                 <h1>{title}</h1>
                 <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                 <button className="Popup_button" onClick={this.popupHandle}>{buttonText}</button>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Popup;