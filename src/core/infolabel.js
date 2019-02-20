import React from 'react';
import Label from './label';
import '../css/main.css';

export default class InfoLabel extends Label {

    state = {
        text: " "
    }

    setText(newValue) {
        this.setState({ text: newValue });
    }

    render() {
        return (
            <p className="label">{this.state.text}</p>
        );
    }

}
