import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class KoreanQuiz2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.quiz.questions[11]
        }
    }
    
    getAnswer = (value) => {
        console.log(value)
        if (value) {
            this.props.history.push('/korean-correct2')
        } else {
            this.props.history.push('/korean-incorrect2')
        }
        // Modal???    
        } 
    
    render () {
        // this.getAnswer()
        const quiz = this.props.quiz.questions[11] 
        // console.log(quiz.a.isCorrect
        return(
            <div className='quiz'>
                <h2>{quiz.title}</h2>
                
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.a.isCorrect)}}> {quiz.a.option}</p>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.b.isCorrect)}}> {quiz.b.option}</p>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.c.isCorrect)}}> {quiz.c.option}</p>
                <p className='quiz-choice' onClick={() => {this.getAnswer(quiz.d.isCorrect)}}> {quiz.d.option}</p>
                <button><Link to={'/korean-art2'}>Go Back</Link></button>
                
            </div>
        )
    }
}

export default withRouter(KoreanQuiz2)