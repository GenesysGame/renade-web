import React from 'react';
import '../css/main.css';

export default class Label extends React.Component {

    render() {
        return (
            <p className="label">{this.props.children}</p>
        );
    }

}
