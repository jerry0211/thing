import React from 'react'
import logo from '../logo.svg';

export default function Home({butt, onButtOn, onButtOff}) {
    return (
        <div className="App">
            <div 
                className="App-header"
                style={{
                    height: '200px',
                    backgroundColor: '#450d51'
                }}
            >
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Project Killer</h2>
                <p>This is where all Jerry projects take place
                    we talk english here !YAY!
                </p>
            </div>
            <div style={{
                backgroundColor: '#21f904'
            }}>
                <p className="App-intro">
                    this site's programmer got inspired by
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.twin-kle.com">This site's developer</a>
                </p>
                <button className="butt-on" onClick={onButtOn}>This is a Butt On</button>

                {butt && <div style={{marginTop: '4em'}}>This is a Butt</div>}
            </div>
        </div>
    )
}