import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import JinJävla from './components/JinJävla'
import NotFound from './components/NotFound'
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Route, 
    Switch, 
    Redirect
  } from 'react-router-dom' 

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'jerry',
      butt: false,
      sentences: []
    }
    this.onButtOn = this.onButtOn.bind(this)
    this.onButtOff = this.onButtOff.bind(this)
    this.another = this.another.bind(this)
  }

  render() {
    const {butt, sentences} = this.state
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Project Killa<img href  = "www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjSvoON5NPWAhXBfbwKHUn3D3YQjRwIBw&url=https%3A%2F%2Fanimalsake.com%2Ffacts-about-gila-monster&psig=AOvVaw0bK2-f8xlg5R7EFan9regn&ust=1507097026335984" /></Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                   className="nav-link" 
                   activeClassName="active" 
                   to="/"
                   activeStyle={{
                    fontWeight: 'bold',
                    color: '#ff3af5'
                   }}
                   >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                   className="nav-link" 
                   activeClassName="nav-item" 
                   to="/JinJävla"
                   activeStyle={{
                    fontWeight: 'bold',
                    color: '#ff3af5'
                   }}
                   >JinJävla</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={() => <Home butt={butt} onButtOn={this.onButtOn} onButtOff={this.onButtOff} />} />
            <Route path="/JinJävla" component={() => <JinJävla butt={butt} onClickButton={this.another} sentences={sentences} />} />
            <Route component={() => <NotFound />} />
            <Route path="/tempMainpage" component={() => <JinJävla butt={butt} onClickButton={this.another} sentences={sentences} />} />
          </Switch>
        </div>
      </Router>
    );
  }

  onButtOn(event) {
    event.preventDefault()
    this.setState({butt: true})
  }

  onButtOff(event) {
    event.preventDefault()
    this.setState({butt: false})
  }

  another(event) {
    event.preventDefault()
    const {sentences} = this.state
    let x = Math.random()
    if(sentences.length === 31){
      this.setState({sentences: []})
    } else if(x >= 0 && x < 0.1){
      this.setState({sentences: sentences.concat(['hello darkness my old friend'])})
    } else if (x >= 0.1 && x < 0.2) {
      this.setState({sentences: sentences.concat(['what r u simpletons doing'])})
    } else if (x >= 0.2 && x < 0.3) {
      this.setState({sentences: sentences.concat(['dat boooeeeyyyyyyy'])})
    } else if (x >= 0.3 && x < 0.4) {
      this.setState({sentences: sentences.concat(['life is but a walking shadow WELELLELELELI'])})
    } else if (x >= 0.4 && x < 0.5) {
      this.setState({sentences: sentences.concat(['sitting on a toilet'])})
    } else if (x >= 0.5 && x < 0.6) {
      this.setState({sentences: sentences.concat(['cause i know somewhere deep in my heart i love you'])})
    } else if (x >= 0.6 && x < 0.7) {
      this.setState({sentences: sentences.concat(['nooooo'])})
    } else if (x >= 0.7 && x < 0.8) {
      this.setState({sentences: sentences.concat(['chocolate rain'])})
    } else if (x >= 0.8 && x < 0.9) {
      this.setState({sentences: sentences.concat(['SIMple'])})
    } else if ( (x>= 0.9 && x < 1) || x === 1) {
      this.setState({sentences: sentences.concat(['YEET'])})
    }
  }
}

export default App;
