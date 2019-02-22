import React from 'react';
import connect from '../model/connection';

import { Section, Label, Button } from '../core';

export default class WelcomeView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            info: "",
            forward: props.forward
        };

        this.setInfo = this.setInfo.bind(this);
        this.connectClicked = this.connectClicked.bind(this);
        this.connectionCallback = this.connectionCallback.bind(this);
    }

    render() {
        return (
            <Section>
                <Label>Development in progress</Label>
                <Label>You can join the chat and ask any question</Label>
                <Button click={this.connectClicked}>Connect</Button>
                <Label>{this.state.info}</ Label>
            </Section>
        );
    }

    setInfo(newValue) {
        this.setState({ info: newValue });
    }

    connectClicked(sender) {
        this.setInfo("Loading...");
        connect(this.connectionCallback);
    }

    connectionCallback() {
        this.setInfo("Success!");
        console.log(this.state.forward);
        this.state.forward();
    }

}