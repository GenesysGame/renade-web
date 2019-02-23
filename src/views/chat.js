import React from 'react';
import Chat from '../model/chat';

import { Section, Label, TextView } from '../core';

export default class ChatView extends React.Component {

    constructor(props) {
        super(props);

        this.chat = new Chat(this);
        this.inputText = null;

        this.push = this.push.bind(this);
        this.submit = this.submit.bind(this);
    }

    push(message) {
        this.chat.push(message);
        this.forceUpdate();
        
        let textarea = document.getElementsByClassName("textview")[0];
        textarea.scrollTop = textarea.scrollHeight;
    }

    submit(e) {
        e.preventDefault();
        let text = this.inputText.value;
        if (text.length > 0) {
            this.chat.send(text);
        };
        this.inputText.value = "";
    }

    render() {
        return (
            <Section>
                <Label>Chat</Label>
                <TextView value={this.chat.text}></TextView>
                <form className="chatform" onSubmit={this.submit}>
                    <input ref={(input) => this.inputText = input}></input>
                </form>
            </Section>
        );
    }

}