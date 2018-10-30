import React, { Component } from 'react';

class SearchForm extends Component {
    state = {
        content: ''
    }

    handleKeyUp = (e) => {
        this.setState({
            content: e.target.value
        })
        console.log(this.state)
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="search">Search:</label>
                    <input onKeyUp={this.handleKeyUp} />
                </form>
            </div>
        );
    }
}

export default SearchForm;