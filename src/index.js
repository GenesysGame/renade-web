import React from 'react';
import ReactDOM from 'react-dom';

import State from './model/state';

import './css/main.css';
import { Bg, Page, Title, Section, Footer } from './core';
import WelcomeView from './views/welcome';
import ChatView from './views/chat';

class View extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            info: "",
            status: State.Welcome
        };

        this.setConnected = this.setConnected.bind(this);
    }

    setConnected() {
        this.setState({ status: State.Connected });
    }

    render() {
        return (
            <div>
                <Bg />
                <Page>
                    <Title>RENADE RP</Title>
                    <CurrentView status={this.state.status} forward={this.setConnected} />
                </Page>        
                <Footer />
            </div>
        );
    }

}

class CurrentView extends React.Component {

    render() {
        switch (this.props.status) {
            case State.Welcome: return <WelcomeView forward={this.props.forward} />;
            case State.Connected: return <ChatView />;
            default: return <Section />;
        }
    }

}

ReactDOM.render(
    <View />,
    document.getElementById('root')
);
