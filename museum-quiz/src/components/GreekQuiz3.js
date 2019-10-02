import React, { Component } from 'react'
import { withRouter } from 'react-router'

class GreekQuiz3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.quiz.questions[2]
        }
    }
    
    getAnswer = (value) => {
        console.log(value)
        if (value) {
            this.props.history.push('/greek-cor-ans3')
        } else {
            this.props.history.push('/greek-inc-ans3')
        }
    }

    render () {
        // this.getAnswer()
        const quiz = this.props.quiz.questions[2] 
        // console.log(quiz.a.isCorrect
        return(
            <div>
                <h3>{quiz.title}</h3>
                <p onClick={() => {this.getAnswer(quiz.a.isCorrect)}}> {quiz.a.option}</p>
                <p onClick={() => {this.getAnswer(quiz.b.isCorrect)}}> {quiz.b.option}</p>
                <p onClick={() => {this.getAnswer(quiz.c.isCorrect)}}> {quiz.c.option}</p>
                <p onClick={() => {this.getAnswer(quiz.d.isCorrect)}}> {quiz.d.option}</p>
            </div>
        )
    }
}

export default withRouter(GreekQuiz3)