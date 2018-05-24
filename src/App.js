import React, { Component } from 'react';
import './style.css';
import FontAwesome from 'react-fontawesome';
import BottomScrollListener from 'react-bottom-scroll-listener';
import Typekit from 'react-typekit';

import { MultiView } from './MultiView.js';
import { SingleView } from './SingleView.js';

const api = 'https://panoramix-backend.herokuapp.com/movies';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { view: 'multi', hits: [], isLoading: true, numPages: 1, isLoadingScroll: false, scrollPos: 0};
    this.toggleView = this.toggleView.bind(this);
  }
  toggleView(filmID) {
    var scrollY = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
    if (this.state.view === 'multi') this.setState({scrollPos: scrollY});
    const newView = this.state.view === 'single' ? 'multi' : 'single';
    this.setState({ view: newView, selected: filmID });
  }
  getQuery(page){
    return ("?page="+page+"&limit=15");
  }
  render() {
    var view = (<div className="loadingSymbol">
            <FontAwesome className='loading-outside' name='circle-notch' spin />
            <FontAwesome className='loading-inside' name='film' /></div>);
    if (!this.state.isLoading)
      view = (this.state.view === 'multi') ? (<div><MultiView data={this.state.hits} select={this.toggleView} scrollRestore={this.restoreScroll.bind(this)}/><BottomScrollListener onBottom={this.fetchMore.bind(this)} offset={800} /></div>) : (<SingleView film={this.state.hits[this.state.selected]} close={this.toggleView}/>);
    var loadOnScroll = (<div className="loadingSymbol">
            <FontAwesome className='loading-outside' name='circle-notch' spin />
            <FontAwesome className='loading-inside' name='film' /></div>);
    if (!this.state.isLoadingScroll)
      loadOnScroll = (<div></div>);
    return (
      <div className="App">
      <Typekit kitId="hsb3bpz"/>
        <header>
          <div className="header-content">
            <h1>Panoramix</h1>
            <div className="strip blue"></div>
            <div className="strip green"></div>
            <div className="strip yellow"></div>
            <div className="strip orange"></div>
            <div className="strip magenta"></div>
          </div>
        </header>
        <div className="viewContainer">
        {view}
        {loadOnScroll}
        </div>
      </div>
    );
  }
  fetchMore() {
    if (!this.state.isLoading){
    this.setState({isLoadingScroll: true});
    var page = this.state.numPages + 1;
    this.setState({numPages: page});
    var query = this.getQuery(page);
    fetch(api + query)
      .then(response => response.json())
      .then(data => {
        var combined = [];
        combined = combined.concat(this.state.hits);
        combined = combined.concat(data.movies);
        
        this.setState({hits: combined, isLoadingScroll: false})})    
  }
  }
  restoreScroll() {
      console.log(this.state.scrollPos);
      window.scrollTo(0, this.state.scrollPos);
  }
  componentDidMount() {
    this.setState({isLoading: true});
    var query = this.getQuery(1);
    fetch(api + query)
      .then(response => response.json())
      .then(data => this.setState({hits: data.movies, isLoading: false}))
  }
}

export default App;
