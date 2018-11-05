import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Results from './components/Results'
import History from './components/History'
import Loader from './components/Loader'

class App extends Component {
  state = {
    results: [],
    history: [],
    isLoading: false
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
  hideList = () => {
    this.setState({
      results: []
    })
  }
  addToHistory = (id = 0) => {
    const { results, history } = this.state
    if(results.length === 0) return
    
    let newHistoryItem = results[0]
    if(id){
      newHistoryItem = results.filter(item => {
        return item.id === id
      })
    } 
    const joined = history.concat(newHistoryItem);
    this.setState({
      history: joined
    })
    this.hideList()
  }

  deleteFromHistory = (id) => {
    const deletedItem = this.state.history.filter(item => {
      return item.id !== id
    })
    this.setState({
      history: deletedItem
    })
  }

  getJson = async (music) => {
      try {
        if (music.length < 2) {
          this.setState({
            results: [],
            isLoading: false
          });
          return;
        }
        
        this.setState({
          isLoading: true
        })
        const apiUrl = `https://itunes.apple.com/search?term=${music}&entity=musicVideo&limit=5`;
        let response = await fetch(apiUrl);
        let json = await response.json();
        this.setState({
          isLoading: false
        })
        this.addResult(json)
      }
      catch(e) {
          console.log('Error!', e);
      }
  }

  render() {
    const { results, history, isLoading } = this.state
    return (
      <div className="App">
        <div className="Container">
          <img src={require('./img/logo.svg')} className="App-logo" alt="logo" />
          { isLoading &&
            <Loader />
          }
          <Form getJson={this.getJson} addToHistory={this.addToHistory}/>
          <Results results={results} addToHistory={this.addToHistory} />
        </div> {/* Closed Container */}
          <History history={history} deleteFromHistory={this.deleteFromHistory} />
      </div>
    );
  }
}

export default App;
