import React from 'react';
import FontAwesome from 'react-fontawesome';
import { CloseButton } from './CloseButton.js';

export class SingleView extends React.Component {
	render() {
	    var img = this.props.film.Poster;
		return <div className="singleContainer">
				<div className="single-background"></div>
				<CloseButton handler={this.props.close} className='close-button' />
				<div className="close" onClick={this.props.close}></div>
				<div className="film-content">
          		<div className="film-poster" style={{backgroundImage: `url(${img})` }}></div>
	            <div className="filmDetails">
	            <h2>{this.props.film.Title}</h2>
	            <span className="year">({this.props.film.Year})</span>
          		<h4>{this.props.film.Genre}</h4>
          		<ul className="filmStats">
			   		<li>
			   			<div className="source">Rated</div>
                    	<div className="value">{this.props.film.Rated}</div>
                    </li>
                    <li>
			   			<div className="source">Runtime</div>
                    	<div className="value">{this.props.film.Runtime}</div>
                    </li>
                    <li>
			   			<div className="source">Domestic Gross</div>
                    	<div className="value">{this.props.film.BoxOffice}</div>
                    </li>
			   	</ul>
	            <p className="synopsis">{this.props.film.Plot}</p>
				<ul className="filmStats">
	          		<li><div className="source">Director</div>
	          		{this.props.film.Director}</li>
	      			<li><div className="source">Starring</div>
			   		{this.props.film.Actors}</li>
			   		<li><div className="source">Written by</div>
			   		{this.props.film.Writer}</li>
	          		<li><div className="source">Production</div>{this.props.film.Production}</li>
          		</ul>
          		<h3>Ratings</h3>
          		 <ul className="ratings">
	              { this.props.film.Ratings.map(function(rating, index) {
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
	            </div>;
	}
}