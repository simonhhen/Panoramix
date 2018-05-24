import React from 'react';

import { FilmCard } from './FilmCard.js';

export class MultiView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selected: 'none'};
		this.handler = this.handler.bind(this);
	}
	handler(filmID) {
		this.setState({selected:1});
		this.props.select(filmID);
	}
	render() {
		var passer = this.handler;
		var cards = this.props.data.map(function(film, index) {
			return <FilmCard film={film} key={index} index={index} handler={passer}/>;
		}, this);
		return <div className="cardContainer">
		{cards}
		</div>;
	}
	componentDidMount() {
		this.props.scrollRestore();
	}
}