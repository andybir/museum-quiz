import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class GreekQuiz2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.quiz.questions[1]
        }
    }
    
    getAnswer = (value) => {
        console.log(value)
        if (value) {
            this.props.history.push('/greek-cor-ans2')
        } else {
            this.props.history.push('/greek-inc-ans2')
        }
    }

    render () {
        // this.getAnswer()
        const quiz = this.props.quiz.questions[1] 
        // console.log(quiz.a.isCorrect
        return(
            <div className='quiz'>
                <h3>{quiz.title}</h3>
                <p onClick={() => {this.getAnswer(quiz.a.isCorrect)}}> {quiz.a.option}</p>
                <p onClick={() => {this.getAnswer(quiz.b.isCorrect)}}> {quiz.b.option}</p>
                <p onClick={() => {this.getAnswer(quiz.c.isCorrect)}}> {quiz.c.option}</p>
                <p onClick={() => {this.getAnswer(quiz.d.isCorrect)}}> {quiz.d.option}</p>
                <button><Link to={'/greek-art2'}>Go Back</Link></button>
            </div>
        )
    }
}

export default withRouter(GreekQuiz2)