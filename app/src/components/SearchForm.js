import React, { Component } from 'react';

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
            </div>
        );
    }
}

export default SearchForm;