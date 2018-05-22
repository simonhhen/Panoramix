import React from 'react';

export class CloseButton extends React.Component {
	render() {
		return (
			<div className="close-button" onClick={this.props.handler}><span></span><span></span></div>
			);
	}
}