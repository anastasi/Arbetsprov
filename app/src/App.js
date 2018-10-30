import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'

class App extends Component {
  state = {
    results: [
      {title: "cat", id:1},
      {title: "frog", id:2},
      {title: "dog", id:3},
    ]
  }
  addResult = (item) => {
    item.id = Math.random()
    const results = [...this.state.results, item]
    this.setState({
      results
    })
  }

  render() {
    return (
      <div className="App">
        <SearchForm addResult={this.addResult} results={this.state.results}/>
      </div>
    );
  }
}

export default App;
