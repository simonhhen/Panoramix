import React, { Component } from 'react';
import './style.css';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { MultiView } from './MultiView.js';
// import { SingleView } from './SingleView.js';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="view-container">
        <Main />
      </div>
    </div>
  </Router>
)
const Header = () => (
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
)

const Main = () => (
  <Switch>
    <Route exact path='/' component={MultiView}/>
    <Route path='/film/:filmID' component={SingleView}/>
</Switch>
)
// const MultiView = () => (
//   <h3>MultiView</h3>
// )
const SingleView = (props) => {
  const filmID = parseInt(props.match.params.filmID);
  return (<h3>{filmID}</h3>);
}

// class Home extends Component {

//   constructor(props){
//     super(props);
//     this.state = { view: 'multi', hits: [], isLoading: true, numPages: 1, isLoadingScroll: false, scrollPos: 0};
//     this.toggleView = this.toggleView.bind(this);
//   }
//   toggleView(filmID) {
//     var scrollY = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
//     if (this.state.view === 'multi') this.setState({scrollPos: scrollY});
//     const newView = this.state.view === 'single' ? 'multi' : 'single';
//     this.setState({ view: newView, selected: filmID });
//   }
//   getQuery(page){
//     return ("?page="+page+"&limit=15");
//   }
//   render() {
//     var view = (<div className="loadingSymbol">
//             <FontAwesome className='loading-outside' name='circle-notch' spin />
//             <FontAwesome className='loading-inside' name='film' /></div>);
//     if (!this.state.isLoading)
//       view = (this.state.view === 'multi') ? (<div><MultiView data={this.state.hits} select={this.toggleView} scrollRestore={this.restoreScroll.bind(this)}/><BottomScrollListener onBottom={this.fetchMore.bind(this)} offset={800} /></div>) : (<SingleView film={this.state.hits[this.state.selected]} close={this.toggleView}/>);
//     var loadOnScroll = (<div className="loadingSymbol">
//             <FontAwesome className='loading-outside' name='circle-notch' spin />
//             <FontAwesome className='loading-inside' name='film' /></div>);
//     if (!this.state.isLoadingScroll)
//       loadOnScroll = (<div></div>);
//     return (
//       <div className="App">
//         <header>
//           <div className="header-content">
//             <h1>Panoramix</h1>
//             <div className="strip blue"></div>
//             <div className="strip green"></div>
//             <div className="strip yellow"></div>
//             <div className="strip orange"></div>
//             <div className="strip magenta"></div>
//           </div>
//         </header>
//         <div className="viewContainer">
//         {view}
//         {loadOnScroll}
//         </div>
//       </div>
//     );
//   }
//   fetchMore() {
//     if (!this.state.isLoading){
//     this.setState({isLoadingScroll: true});
//     var page = this.state.numPages + 1;
//     this.setState({numPages: page});
//     var query = this.getQuery(page);
//     fetch(api + query)
//       .then(response => response.json())
//       .then(data => {
//         var combined = [];
//         combined = combined.concat(this.state.hits);
//         combined = combined.concat(data.movies);
        
//         this.setState({hits: combined, isLoadingScroll: false})})    
//   }
//   }
//   restoreScroll() {
//       console.log(this.state.scrollPos);
//       window.scrollTo(0, this.state.scrollPos);
//   }
//   componentDidMount() {
//     this.setState({isLoading: true});
//     var query = this.getQuery(1);
//     fetch(api + query)
//       .then(response => response.json())
//       .then(data => this.setState({hits: data.movies, isLoading: false}))
//   }
// }

export default App;
