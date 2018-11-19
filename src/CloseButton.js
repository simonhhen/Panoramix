import React from 'react';
import { Link } from 'react-router-dom';

export class CloseButton extends React.Component {
	render() {
		return (
			<Link to="/" className="button-container" onClick={this.props.onClick}><div className="close-button"><span></span><span></span></div></Link>
			);
	}
}