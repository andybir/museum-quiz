import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class GreekQuiz1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.quiz.questions[0]
        }
    }
    
    getAnswer = (value) => {
        console.log(value)
        if (value) {
            this.props.history.push('/greek-cor-ans1')
        } else {
            this.props.history.push('/greek-inc-ans1')
        }

        // Modal???
        // console.log(e.target.getAttribute('data-correct'));
        
        // console.log(this.state.quiz.a.isCorrect)
    //     if (e.target.getAttribute('data-correct') === true) {
    //    return <Link to={'/correct-answer'} />
    //     } else {
    //         return <Link to={'/incorrect-answer'} />
        } 
    // } else if (this.state.quiz.b.isCorrect === true) {
    //     return <Link to={'/correct-answer'} /> 
    // } else if (this.state.quiz.c.isCorrect === true) {
    //     return <Link to={'/correct-answer'} />
    // } else if (this.state.quiz.d.isCorrect === true) {
    //     return <Link to={'/correct-answer'} />
    // } else {return <Link to={'/incorrect-answer'} />}
        // if (e.target.getAttribute('data-correct') === true) {
        //     return <Link to={'/correct-answer'} /> 
        // } else {
        //     return <Link to={'/incorrect-answer'} />
        // }
        // return e.target.getAttribute('data-correct') === true ? <Link to={'/correct-answer'} /> : <Link to={'/incorrect-answer'} />
    render () {
        // this.getAnswer()
        const quiz = this.props.quiz.questions[0] 
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

export default withRouter(GreekQuiz1)