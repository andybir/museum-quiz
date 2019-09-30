import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Collection from './components/Collection'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      collection: []
    }
  }

  async componentDidMount() {
    const response = await axios('https://api.harvardartmuseums.org/object/287354?apikey=c7afc0b0-e325-11e9-9fc2-ed594f20726e')
    console.log(response.data.images[0].baseimageurl)
    const artifact = response.data
    const img = response.data.images[0].baseimageurl
    const title = response.data.title
    const text = response.data.labeltext
    this.setState({
      img: img,
      title: title,
      text: text
    })
  }

  render() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path='/collection' render={() => <Collection collection={this.state.img}/> } />
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
