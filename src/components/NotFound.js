import React from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Redirect
  } from 'react-router-dom' 
export default function NotFound() {
    return(
        <Router>
            <div>
                <Redirect to='/JinJävla'/>
            </div>
        </Router>
    )
}
