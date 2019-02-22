import React from 'react';
import connect from '../model/connection';

import { Section, Label } from '../core';

export default class ChatView extends React.Component {

    render() {
        return (
            <Section>
                <Label>Chat</Label>
                <div>{this.props.children}</div>
            </Section>
        );
    }

}