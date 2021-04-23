import React, { Component } from 'react'
import Unmount from './Unmount'

export default class Lifecycle extends Component {

    state = {
        favorite: ["Ditto"],
        display: true
    }

    componentDidMount() {
        setTimeout(() => {        
            fetch('https://pokeapi.co/api/v2/pokemon/mew')
                .then(response => response.json())
                .then(pokemon => this.setState({ favorite: pokemon.name}))
        },2000)
    }

    componentDidUpdate() {
        alert('Your favorite has changed from Ditto and is now ' + this.state.favorite + ' !!!')
    }

    unmountComp() {
        this.setState({ display: false})
    }

    render() {
        return (
            <div>
                <h1>My favorite pokemon is {this.state.favorite}!!</h1>
                {this.state.display ? <Unmount /> : null }
                <button type='button' onClick={() => this.unmountComp()}>This Will Unmount Component </button>
            </div>
        )
    }
}

