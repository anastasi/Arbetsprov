import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import SearchHistory from './components/SearchHistory'

class App extends Component {
  state = {
    results: [
      {title: "cat", id:1},
      {title: "frog", id:2},
      {title: "dog", id:3},
    ],
    history: []
  }
  addResult = (item) => {
    item.id = Math.random()
    const results = [...this.state.results, item]
    this.setState({
      results
    })
  }
  addToHistory = (id) => {
    const newHistoryItem = this.state.results.filter(item => {
      return item.id === id
    })
    const joined = this.state.history.concat(newHistoryItem);
    this.setState({
      history: joined
    })
  }
  

  render() {
    return (
      <div className="App">
        <SearchForm addResult={this.addResult} results={this.state.results} addToHistory={this.addToHistory}/>
        <SearchResults results={this.state.results} addToHistory={this.addToHistory} />
        <SearchHistory history={this.state.history} addToHistory={this.addToHistory} />
      </div>
    );
  }
}

export default App;
