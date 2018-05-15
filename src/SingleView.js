import React from 'react';

import { FilmCard } from './FilmCard.js';

export class SingleView extends React.Component {
	render() {
		return <div className="singleContainer">
          		<FilmCard film={this.props.film} />
          		<h4>{this.props.film.Genre}</h4>
          		<h5>{this.props.film.Director} | {this.props.film.Production}</h5>
			   	<ul className="filmStats">
			   		<li>{this.props.film.Rated}</li>
			   		<li>{this.props.film.Runtime}</li>
			   		<li>{this.props.film.BoxOffice}</li>
			   	</ul>
			   	<ul className="filmDetails">

			   		<li>{this.props.film.Actors}</li>
			   		<li>{this.props.film.Plot}</li>
			   		<li>{this.props.film.Writer}</li>
			   	</ul>
       			</div>;
	}
}