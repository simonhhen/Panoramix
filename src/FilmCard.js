import React from 'react';

export class FilmCard extends React.Component {
	render() {
    var img = this.props.film.Poster;
		return <div className="filmCard" key={this.props.film.imdbID}>
            <div className="film-poster" style={{backgroundImage: `url(${img})` }}></div>
            <div className="filmDetails">
            <h2>{this.props.film.Title}</h2>
            <h3>{this.props.film.Year}</h3>
            <ul className="ratings">
              { this.props.film.Ratings.map(function(rating) {
                var sourceClass = rating.Source.replace(/ /g, '-').toLowerCase();
                return (<li className={sourceClass}>
                		<div className="source">{rating.Source}</div>
                    <div className="value">{rating.Value}</div>
                	</li>);
              })
              }

            </ul>
            </div>
          </div>;
	}
}