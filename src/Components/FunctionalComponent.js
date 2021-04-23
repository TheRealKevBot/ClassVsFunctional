import React, { useState } from 'react';

export default function FunctionalComponent() {

    const [username, setUsername] = useState("RealKevBot")

    return (
        <div>
            <h1>I am a Functional Component!</h1>
            <h2>Hello {username}</h2>
            <button type='button' onClick={() => setUsername('StateChanger')}>Change the state of username!</button>
        </div>
    )
}
