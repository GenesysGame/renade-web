import React from 'react';
import '../css/main.css';

export default class TextView extends React.Component {

    render() {
        return (
            <textarea className="textview" value={this.props.value}></textarea>
        );
    }

}
