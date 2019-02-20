import React from 'react';
import '../css/main.css';

export default class Section extends React.Component {

    render() {
        return (
            <div className="section">{this.props.children}</div>
        );
    }

}
