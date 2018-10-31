import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import SearchHistory from './components/SearchHistory'

class App extends Component {
  state = {
    results: [],
    history: [],
  }
  addResult = (json) => {
    //Map API to our schema
    let results = []
    json.results.forEach(res=>{
      results.push({id: res.trackId, title: res.trackName})
    })
    this.setState({
      results
    })
  }
  addToHistory = (id = 0) => {
    if(this.state.results.length === 0) return

    let newHistoryItem = this.state.results[0]
    if(id){
      newHistoryItem = this.state.results.filter(item => {
        return item.id === id
      })
    }
    
    const joined = this.state.history.concat(newHistoryItem);
    this.setState({
      history: joined
    })
  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  deleteFromHistory = (id) => {
    const deletedHistoryItem = this.state.history.filter(item => {
      return item.id !== id
    })
    this.setState({
      history: deletedHistoryItem
    })
  }
  async getJson(music) {
      try {
          let response = await fetch(`https://itunes.apple.com/search?term=${music}&entity=musicVideo&limit=5`);
          let json = await response.json();
          this.addResult(json)
          console.log(json)
      }
      catch(e) {
          console.log('Error!', e);
      }
  }

  render() {
    
    return (
      <div className="App">
        <div className="Container">
          <img src={require('./img/logo.svg')} className="App-logo" alt="logo" />
          <SearchForm getJson={this.getJson} addResult={this.addResult} results={this.state.results} addToHistory={this.addToHistory}/>
          <SearchResults results={this.state.results} addToHistory={this.addToHistory} />
          <SearchHistory history={this.state.history} addToHistory={this.addToHistory} deleteFromHistory={this.deleteFromHistory} />
        </div>
      </div>
    );
  }
}

export default App;
