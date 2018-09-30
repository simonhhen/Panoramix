import FontAwesome from 'react-fontawesome';
import React from 'react';


export class LoadingView extends React.Component {
    render() {
        return (
            <div className="loading-view">
                <div className="loading-symbol">
                    <FontAwesome className='loading-outside' name='circle-notch' spin />
                    <FontAwesome className='loading-inside' name='film' />
                </div>
            </div>
        );
    }
}
