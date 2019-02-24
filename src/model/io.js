import io from 'socket.io-client';
import config from '../config.json';

class IO {

    constructor() {
        this.socket = null;
        this.isConnected = false;
        this.observers = [];

        this.eventReceived = this.eventReceived.bind(this);
    }

    // MARK: Connection

    connect(callback) {
        if (this.isConnected) {
            callback();
            return;
        }
        let address = config.host + ':' + config.port;
        this.socket = io.connect(address);
        let self = this;
        this.socket.on('connect', function() {
            self.socket.on('message', self.eventReceived);
            self.isConnected = true;
            callback();
        });
    }

    disconnect() {
        if (!this.isConnected) return;
        this.socket.disconnect();
        this.socket = null;
        this.post('Disconnected!');
    }

    eventReceived(msg) {
        this.post(msg);
    }

    // MARK: Observers

    addObserver(observer) {
        if (this.observers.filter(v => { v == observer }).length > 0) return;
        this.observers.push(observer);
    }

    removeObserver(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    post(message) {
        this.observers.forEach(observer => {
            observer.push(message);
        })
    }

    // MARK: Send event to the server

    send(e) {
        this.socket.send(e);
    }

}

const instance = new IO();

export default instance;