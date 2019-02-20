import React from 'react';
import ReactDOM from 'react-dom';
import connect from './model/connection';

import './css/main.css';
import { Bg, Page, Title, Section, Label, InfoLabel, Button, Footer } from './core';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ""
        };

        this.setInfo = this.setInfo.bind(this);
        this.connectClicked = this.connectClicked.bind(this);
        this.connectionCallback = this.connectionCallback.bind(this);
    }

    setInfo(newValue) {
        this.setState({ info: newValue });
    }

    connectClicked(sender) {
        this.setInfo("Loading...");
        let self = this;
        connect(this.connectionCallback);
    }

    connectionCallback() {
        this.setInfo("Success!");
    }

    render() {
        return (
            <div>
                <Bg />
                <Page>
                    <Title>RENADE RP</Title>
                    <Section>
                        <Label>Development in progress</Label>
                        <Label>You can join the chat and ask any question</Label>
                        <Button click={this.connectClicked}>Connect</Button>
                        <Label>{this.state.info}</ Label>
                    </Section>
                </Page>        
                <Footer />
            </div>
        );
    }

}

ReactDOM.render(
    <View />,
    document.getElementById('root')
);
