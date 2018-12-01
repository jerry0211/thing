import React from 'react'

export default function JinJävla({butt, onClickButton, onButtOff, sentences}) {
    return (
        <div className="App">
            <div style={{
                backgroundColor: '#21f904'
            }}>
                <p className="App-intro">
                    this site's programmer got inspired by
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.twin-kle.com">This site's developer</a>
                </p>
                <button className="butt-on" onClick={onClickButton}>This is another button</button>
                {sentences.map((sentence, index) => <div key={index}>{sentence}</div>)}
            </div>
        </div>
    )
}

