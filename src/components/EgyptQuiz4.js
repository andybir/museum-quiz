import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class EgyptQuiz4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.quiz.questions[8]
        }
    }
    
    getAnswer = (value) => {
        if (value) {
            this.props.history.push('/egypt-correct4')
        } else {
            this.props.history.push('/egypt-incorrect4')
        }
    } 
    
    render () {
        const quiz = this.props.quiz.questions[8] 
        return(
            <div className='quiz'>
                <h2>{quiz.title}</h2>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.a.isCorrect)}}> {quiz.a.option}</p>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.b.isCorrect)}}> {quiz.b.option}</p>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.c.isCorrect)}}> {quiz.c.option}</p>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.d.isCorrect)}}> {quiz.d.option}</p>
                <button><Link to={'/egypt-art4'}>Go Back</Link></button>
            </div>
        )
    }
}

export default withRouter(EgyptQuiz4)