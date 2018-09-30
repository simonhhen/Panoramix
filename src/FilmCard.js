import React from 'react';

export class FilmCard extends React.Component {
	render() {
    var img = this.props.film.Poster;
		return (
      <a href={'/films/' + this.props.index}>
        <div className="film-card" onClick={() => this.props.handler()}>
          <div className="film-poster" style={{backgroundImage: `url(${img})` }}></div>
          <div className="film-details">
          <h2>{this.capText(this.props.film.Title)}</h2>
          <h3>{this.props.film.Year}</h3>
          <ul className="ratings">
            {
              this.props.film.Ratings.map(function(rating, index) {
                var sourceClass = rating.Source.replace(/ /g, '-').toLowerCase();
                if (rating.Source === 'Internet Movie Database') rating.Source = 'IMDB';
                return (
                  <li className={sourceClass} key={index}>
                    <div className="source">{rating.Source}</div>
                    <div className="value">{rating.Value}</div>
                  </li>
                );
              })
            }

          </ul>
          </div>
        </div>
      </a>
      );
  }
  capText(string) {
    const ellipses = string.length > 50 ? '...' : ''; 
    return string.substr(0,50).trim() + ellipses;
  }
}