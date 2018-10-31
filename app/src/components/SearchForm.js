import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        title: ''
    }
    
    handleOnChange = (e) => {
        const musicName = e.target.value
        this.setState({
            title: musicName
        })
        // this.props.addResult(this.state)
        this.props.getJson(musicName)
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addToHistory() 
    }

   
    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="search" onChange={this.handleOnChange} className="InputField" placeholder="Search for something..." />
                </form>
            </div>
        );
    }
}

export default SearchForm;