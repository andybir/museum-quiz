import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import Artifact1 from './components/Artifact1'
import Artifact2 from './components/Artifact2'
import Artifact3 from './components/Artifact3'
import Artifact4 from './components/Artifact4'
import Artifact5 from './components/Artifact5'
import Quiz1 from './components/Quiz1'
import GreekQuiz from './components/GreekQuiz'
import './App.css'
import CorrectAnswer from './components/CorrectAnswer'
import IncorrectAnswer from './components/IncorrectAnswer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      artifact: [],
      quiz: GreekQuiz
      
    }
    
  }

  // async componentDidMount() {
  //   const response = await axios('https://api.harvardartmuseums.org/object/287354?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e')
  //   const artifact = response.data
  //   // console.log(artifact)
  //   const img = response.data.images[0].baseimageurl
  //   const title = response.data.title
  //   const text = response.data.labeltext
  //   this.setState({
  //     artifact: artifact
  //     // img: img,
  //     // title: title,
  //     // text: text
  //   })
  // }

  render() {
    // console.log(this.state.quiz)
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path='/' component={Welcome} />
          {/* <Route exact path='/collection' render={() => <Collection artifact={this.state.artifact}/> } /> */}
          <Route exact path='/artifact1' component={Artifact1} />
          <Route exact path='/artifact2' component={Artifact2} />
          <Route exact path='/artifact3' component={Artifact3} />
          <Route exact path='/artifact4' component={Artifact4} />
          <Route exact path='/artifact5' component={Artifact5} /> 
          <Route exact path='/quiz1' render={() => <Quiz1 quiz={this.state.quiz} /> } /> 
          <Route exact path='/correct-answer/' component={CorrectAnswer} />
          <Route exact path='/incorrect-answer' component={IncorrectAnswer} />
        </Switch>
      </main>
      
    </div>
  )
  }
}

export default () => (
  <Router>
    <App />
  </Router>
)
