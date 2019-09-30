import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import Artifact1 from './components/Artifact1'
import Artifact2 from './components/Artifact2'
import Artifact3 from './components/Artifact3'
import Artifact4 from './components/Artifact4'
import Artifact5 from './components/Artifact5'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      artifact: []
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
