import React from 'react';
import '../css/main.css';

export default class Title extends React.Component {

    render() {
        return (
            <div className="title">{this.props.children}</div>
        );
    }

}
