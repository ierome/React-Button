import React, { Component } from 'react';
import './App.css';
import Click from './Click'

class App extends Component {
  state = {
    likes: 0,
    word: 'Likes',
    likes2: 0.,
    word2: 'Likes'
  }
  updateLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
    if (this.state.likes == 0) {
      this.setState({
        word: 'Like'
      })
  } else {
    this.setState({
      word: 'Likes'
    })
  }
}
updateLikes1 = () => {
  this.setState({
    likes2: this.state.likes2 + 1
  })
  if (this.state.likes2 == 0) {
    this.setState({
      word2: 'Like'
    })
} else {
  this.setState({
    word2: 'Likes'
  })
}
}

  render() {
  return (
    <>
    <div id="container">
      <h1>Like that Shit! (Top one using one file. Bottom using 2 files via Props)</h1>
      <button onClick={this.updateLikes}>{this.state.likes} {this.state.word}</button>
      <Click likes={this.state.likes2} word={this.state.word2} onClick={this.updateLikes1}></Click>
    </div>
    </>
  )
}
}

export default App;
