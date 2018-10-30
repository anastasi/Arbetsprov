import React, { Component } from 'react';
import SearchResults from './SearchResults';

class SearchForm extends Component {
    state = {
        title: ''
    }

    handleOnChange = (e) => {
        this.setState({
            title: e.target.value
        })
        this.props.addResult(this.state)
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input type="search" onChange={this.handleOnChange} />
                </form>
                <SearchResults results={this.props.results} />
            </div>
        );
    }
}

export default SearchForm;