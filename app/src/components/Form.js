import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    state = {
        title: ''
    }
    handleOnChange = (e) => {
        const musicName = e.target.value
        this.setState({
            title: musicName
        })
        this.props.getJson(musicName)
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.addToHistory() 
    }
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleOnSubmit}>
                    <input type="search" onChange={this.handleOnChange} className="InputField" placeholder="Search for something..." />
                </form>
            </div>
        );
    }
}

export default Form;