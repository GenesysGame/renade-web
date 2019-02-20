import React from 'react';
import '../css/main.css';

export default class Button extends React.Component {

    handleClick = () => {
        this.props.click(this);
    }

    render() {
        return (
            <div className="button" onClick={this.handleClick}>{this.props.children}</div>
        );
    }

}
