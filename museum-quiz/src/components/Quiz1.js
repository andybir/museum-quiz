import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Quiz1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.quiz.questions[0]
        }
    }
    
    getAnswer = () => {
        // console.log(this.state.quiz.a.isCorrect)
        if (this.state.quiz.a.isCorrect === true) {
       return <Link to={'/correct-answer'} /> 
    } else if (this.state.quiz.b.isCorrect === true) {
        return <Link to={'/correct-answer'} /> 
    } else if (this.state.quiz.c.isCorrect === true) {
        return <Link to={'/correct-answer'} />
    } else if (this.state.quiz.d.isCorrect === true) {
        return <Link to={'/correct-answer'} />
    } else {return <Link to={'/incorrect-answer'} />}
    }

    render () {
        // this.getAnswer()
        const quiz = this.props.quiz.questions[0] 
        // console.log(quiz.a.isCorrect)
        return(
            <div>
                <h3>{quiz.title}</h3>
                <p onClick={this.getAnswer}>{quiz.a.option}</p>
                <p onClick={this.getAnswer}>{quiz.b.option}</p>
                <p onClick={this.getAnswer}>{quiz.c.option}</p>
                <p onClick={this.getAnswer}>{quiz.d.option}</p>
            </div>
        )
    }
}

export default Quiz1