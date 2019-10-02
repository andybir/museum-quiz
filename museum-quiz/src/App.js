import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import GreekArt1 from './components/GreekArt1'
import GreekArt2 from './components/GreekArt2'
import GreekArt3 from './components/GreekArt3'
import GreekArt4 from './components/GreekArt4'
import GreekArt5 from './components/GreekArt5'
import GreekQuiz1 from './components/GreekQuiz1'
import GreekQuiz2 from './components/GreekQuiz2'
import GreekQuiz3 from './components/GreekQuiz3'
import GreekQuiz4 from './components/GreekQuiz4'
import GreekQuiz5 from './components/GreekQuiz5'
import GreekTest from './components/GreekTest'
import './App.css'
import GreekCorAns1 from './components/GreekCorAns1'
import GreekIncAns1 from './components/GreekIncAns1'
import GreekCorAns2 from './components/GreekCorAns2'
import GreekIncAns2 from './components/GreekIncAns2'
import GreekCorAns3 from './components/GreekCorAns3'
import GreekIncAns3 from './components/GreekIncAns3'
import GreekCorAns4 from './components/GreekCorAns4'
import GreekIncAns4 from './components/GreekIncAns4'
import GreekCorAns5 from './components/GreekCorAns5'
import GreekIncAns5 from './components/GreekIncAns5'


class App extends Component {
  constructor() {
    super()
    this.state = {
      artifact: [],
      quiz: GreekTest
      
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
          <Route exact path='/greek-art1' component={GreekArt1} />
          <Route exact path='/greek-art2' component={GreekArt2} />
          <Route exact path='/greek-art3' component={GreekArt3} />
          <Route exact path='/greek-art4' component={GreekArt4} />
          <Route exact path='/greek-art5' component={GreekArt5} /> 
          <Route exact path='/greek-quiz1' render={() => <GreekQuiz1 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz2' render={() => <GreekQuiz2 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz3' render={() => <GreekQuiz3 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz4' render={() => <GreekQuiz4 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz5' render={() => <GreekQuiz5 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-cor-ans1' component={GreekCorAns1} />
          <Route exact path='/greek-inc-ans1' component={GreekIncAns1} />
          <Route exact path='/greek-cor-ans2' component={GreekCorAns2} />
          <Route exact path='/greek-inc-ans2' component={GreekIncAns2} />
          <Route exact path='/greek-cor-ans3' component={GreekCorAns3} />
          <Route exact path='/greek-inc-ans3' component={GreekIncAns3} />
          <Route exact path='/greek-cor-ans4' component={GreekCorAns4} />
          <Route exact path='/greek-inc-ans4' component={GreekIncAns4} />
          <Route exact path='/greek-cor-ans5' component={GreekCorAns5} />
          <Route exact path='/greek-inc-ans5' component={GreekIncAns5} />
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
