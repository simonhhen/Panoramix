import React from 'react';
import './style.css';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { MultiView } from './MultiView.js';
import { SingleView } from './SingleView.js';

export class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			noscroll: false,
    };
    this.onFilmSelect = this.onFilmSelect.bind(this);
    this.onFilmClose = this.onFilmClose.bind(this);
	}

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="container">
            <MultiView onFilmSelect={this.onFilmSelect}/>
            <Overlay onClose={this.onFilmClose}/>
          </div>
        </div>
      </Router>
    );
  }
  onFilmSelect() {
    this.setState({noscroll: true});
  }
  onFilmClose() {
    this.setState({noscroll: false});
  }
}

const Header = () => (
  <header>
    <div className="header-content">
      <h1>Panoramix</h1>
      <div className="strip-container">
        <div className="strip blue"></div>
        <div className="strip green"></div>
        <div className="strip yellow"></div>
        <div className="strip orange"></div>
        <div className="strip magenta"></div>
      </div>
    </div>
  </header>
)

const Overlay = (props) => (
  <Switch>
    <Route path='/film/:filmID' render={(routeProps) => {
      return <SingleView {...routeProps} onClose={props.onClose}/>;
    }}/>
  </Switch>
)

export default App;
