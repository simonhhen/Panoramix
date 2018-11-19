import React from 'react';
import { LoadingView } from './LoadingView.js';
import { CloseButton } from './CloseButton.js';
import { Redirect } from 'react-router';

export class SingleView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			filmID: props.match.params.filmID,
		};
		this.handleClick = this.handleClick.bind(this)
	}
	render() {
		if (this.state.backHome) return <Redirect push to="/" />;
		if (this.state.isLoading) return <LoadingView />;
	    var img = this.state.film.Poster;
		return <div className="overlay" id="overlay">
				<div className="film-details-header">
					<CloseButton onClick={this.props.onClose}/>
				</div>
				<div className="overlay-container">
				<div className="film-details-banner">
				<div className="single-container align-bottom">
					<div className="film-poster" style={{backgroundImage: `url(${img})` }}></div>
					<div className="film-details-highlights">
						<h2>{this.state.film.Title}</h2>
						<span className="year">({this.state.film.Year})</span>
						<h4>{this.state.film.Genre}</h4>
					</div>
				</div>
				</div>
				<div className="film-content">
				<div className="single-container">
	            <div className="film-details">
          		<ul className="film-stats">
			   		<li>
			   			<div className="source">Rated</div>
                    	<div className="value">{this.state.film.Rated}</div>
                    </li>
                    <li>
			   			<div className="source">Runtime</div>
                    	<div className="value">{this.state.film.Runtime}</div>
                    </li>
                    <li>
			   			<div className="source">Domestic Gross</div>
                    	<div className="value">{this.state.film.BoxOffice}</div>
                    </li>
			   	</ul>
	            <p className="synopsis">{this.state.film.Plot}</p>
				<ul className="film-stats">
	          		<li><div className="source">Director</div>
	          		{this.state.film.Director}</li>
	      			<li><div className="source">Starring</div>
			   		{this.state.film.Actors}</li>
			   		<li><div className="source">Written by</div>
			   		{this.state.film.Writer}</li>
	          		<li><div className="source">Production</div>{this.state.film.Production}</li>
          		</ul>
          		<h3>Ratings</h3>
          		 <ul className="ratings">
	              { this.state.film.Ratings.map(function(rating, index) {
	                var sourceClass = rating.Source.replace(/ /g, '-').toLowerCase();
	                return (<li className={sourceClass} key={index}>
	                		<div className="source">{rating.Source}</div>
	                    <div className="value">{rating.Value}</div>
	                	</li>);
	              })
	              }

	            </ul>
       			</div>
				</div>
				</div>
				</div>
				</div>;
	}
	componentDidMount() {
		document.addEventListener('mousedown', this.handleClick);
		const api = 'https://panoramix-backend.herokuapp.com/movie';
		fetch(api + '/' + this.state.filmID)
			.then(response => response.json())
			.then(data => {
			  this.setState({ film: data, isLoading: false });
			});
	}
	
	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick);
	}

	handleClick(event) {
		var overlay = document.getElementById('overlay');
		if (event.target === overlay) {
			this.setState({backHome: true});
		}
	}
}