import React from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import { FilmCard } from './FilmCard.js';
import { LoadingView } from './LoadingView.js';

const api = 'https://panoramix-backend.herokuapp.com/movies';

export class MultiView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			isLoadingScroll: false,
			numPages: 1,
		};
	}
	render() {
		if (this.state.isLoading) return <LoadingView />;
		var cards = this.state.data.map(function(film, index) {
			return <FilmCard film={film} key={index} index={index} onClick={this.props.onFilmSelect} />;
		}, this);
		return (
			<div>
				<div className="card-container">
					{cards}
					<LoadingView />
					<BottomScrollListener onBottom={this.fetchMore.bind(this)} offset={800} />
				</div>
			</div>
		);
	}
	componentDidMount() {
		var query = this.getQuery(1);
		fetch(api + query)
			.then(response => response.json())
			.then(data => this.setState({data: data.movies, isLoading: false}));
	}

	getQuery(page){
		return ("?page="+page+"&limit=30");
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
				combined = combined.concat(this.state.data);
				combined = combined.concat(data.movies);
				this.setState({data: combined, isLoadingScroll: false})
			});    
	  	}
	}
}