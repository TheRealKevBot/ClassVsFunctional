import React, { Component } from 'react'

export default class Unmount extends Component {

    componentWillUnmount() {
        alert('This is the alert telling you that this will unmount the component above your button');
    }

    render() {
        return (
            <div>
                <h3> I will be unmounted if you click the button!</h3>
            </div>
        )
    }
}


