import React from 'react';

import { FilmCard } from './FilmCard.js';

export class MultiView extends React.Component {
	singleView(){
		console.log("Press!");
	}
	clickCallback(){
		this.setState({view: 'single'});
	}
	render() {
		console.log(this.props.data);
		return <div className="cardContainer">
		{this.props.data.map(function(film){
			return <FilmCard film={film}/>;
		})}
		</div>;
	}
}