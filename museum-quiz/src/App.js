import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Footer from './components/Footer'
import GreekArt1 from './components/GreekArt1'
import GreekArt2 from './components/GreekArt2'
import GreekArt3 from './components/GreekArt3'
import GreekArt4 from './components/GreekArt4'
import GreekArt5 from './components/GreekArt5'
import EgyptArt1 from './components/EgyptArt1'
import EgyptArt2 from './components/EgyptArt2'
import EgyptArt3 from './components/EgyptArt3'
import EgyptArt4 from './components/EgyptArt4'
import EgyptArt5 from './components/EgyptArt5'
import GreekQuiz1 from './components/GreekQuiz1'
import GreekQuiz2 from './components/GreekQuiz2'
import GreekQuiz3 from './components/GreekQuiz3'
import GreekQuiz4 from './components/GreekQuiz4'
import GreekQuiz5 from './components/GreekQuiz5'
import EgyptQuiz1 from './components/EgyptQuiz1'
import EgyptQuiz2 from './components/EgyptQuiz2'
import EgyptQuiz3 from './components/EgyptQuiz3'
import EgyptQuiz4 from './components/EgyptQuiz4'
import EgyptQuiz5 from './components/EgyptQuiz5'
import GreekComplete from './components/GreekComplete'
import Questions from './components/Questions'
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
import EgyptCorrect1 from './components/EgyptCorrect1'
import EgyptCorrect2 from './components/EgyptCorrect2'
import EgyptCorrect3 from './components/EgyptCorrect3'
import EgyptCorrect4 from './components/EgyptCorrect4'
import EgyptCorrect5 from './components/EgyptCorrect5'
import EgyptIncorrect1 from './components/EgyptIncorrect1'
import EgyptIncorrect2 from './components/EgyptIncorrect2'
import EgyptIncorrect3 from './components/EgyptIncorrect3'
import EgyptIncorrect4 from './components/EgyptIncorrect4'
import EgyptIncorrect5 from './components/EgyptIncorrect5'
import NotFound from './components/NotFound'


class App extends Component {
  constructor() {
    super()
    this.state = {
      artifact: [],
      quiz: Questions
      
    }
    
  }

  render() {
    // console.log(this.state.quiz)
  return (
    <div className="App">
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
          {/* <Route exact path='/collection' render={() => <Collection artifact={this.state.artifact}/> } /> */}
          <Route exact path='/greek-art1' component={GreekArt1} />
          <Route exact path='/greek-art2' component={GreekArt2} />
          <Route exact path='/greek-art3' component={GreekArt3} />
          <Route exact path='/greek-art4' component={GreekArt4} />
          <Route exact path='/greek-art5' component={GreekArt5} /> 
          <Route exact path='/egypt-art1' component={EgyptArt1} />
          <Route exact path='/egypt-art2' component={EgyptArt2} />
          <Route exact path='/egypt-art3' component={EgyptArt3} />
          <Route exact path='/egypt-art4' component={EgyptArt4} />
          <Route exact path='/egypt-art5' component={EgyptArt5} /> 
          <Route exact path='/greek-quiz1' render={() => <GreekQuiz1 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz2' render={() => <GreekQuiz2 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz3' render={() => <GreekQuiz3 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz4' render={() => <GreekQuiz4 quiz={this.state.quiz} /> } /> 
          <Route exact path='/greek-quiz5' render={() => <GreekQuiz5 quiz={this.state.quiz} /> } /> 
          <Route exact path='/egypt-quiz1' render={() => <EgyptQuiz1 quiz={this.state.quiz} /> } /> 
          <Route exact path='/egypt-quiz2' render={() => <EgyptQuiz2 quiz={this.state.quiz} /> } /> 
          <Route exact path='/egypt-quiz3' render={() => <EgyptQuiz3 quiz={this.state.quiz} /> } /> 
          <Route exact path='/egypt-quiz4' render={() => <EgyptQuiz4 quiz={this.state.quiz} /> } /> 
          <Route exact path='/egypt-quiz5' render={() => <EgyptQuiz5 quiz={this.state.quiz} /> } />
          <Route exact path='/greek-complete' component={GreekComplete} />
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
          <Route exact path='/egypt-correct1' component={EgyptCorrect1} />
          <Route exact path='/egypt-correct2' component={EgyptCorrect2} />
          <Route exact path='/egypt-correct3' component={EgyptCorrect3} />
          <Route exact path='/egypt-correct4' component={EgyptCorrect4} />
          <Route exact path='/egypt-correct5' component={EgyptCorrect5} />
          <Route exact path='/egypt-incorrect1' component={EgyptIncorrect1} />
          <Route exact path='/egypt-incorrect2' component={EgyptIncorrect2} />
          <Route exact path='/egypt-incorrect3' component={EgyptIncorrect3} />
          <Route exact path='/egypt-incorrect4' component={EgyptIncorrect4} />
          <Route exact path='/egypt-incorrect5' component={EgyptIncorrect5} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
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
