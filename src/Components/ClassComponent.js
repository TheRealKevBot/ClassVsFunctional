import React, { Component } from 'react'

export default class ClassComponent extends Component {

    state = {
        username: 'RealKevBot'
    }

    stateChange = () => {
        this.setState({ username: 'StateChanger'})
    }

    render() {
        return (
            <div>
                <h1>I am a Class Component!</h1>
                <h2>Hello {this.state.username}</h2>
                <button type="button" onClick={this.stateChange}>Change the state of username!</button> 
            </div>
        )
    }
}
