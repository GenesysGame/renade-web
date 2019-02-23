import IO from './io';

export default class Chat {

    constructor(observer) {
        this.io = IO;
        this.text = "";

        this.io.addObserver(observer);
    }

    push(message) {
        if (this.text.length > 0) {
            this.text += "\n";
        }
        this.text += message;
    }

    send(message) {
        this.io.socket.send(message);
    }

}