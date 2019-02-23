import io from 'socket.io-client';
 
// Создаем текст сообщений для событий
let strings = {
	'connected': '%time%: Вы успешно соединились к сервером как %name%.',
	'userJoined': '[sys][time]%time%[/time]: Пользователь [user]%name%[/user] присоединился к чату.[/sys]',
	'messageSent': '%time%: %name%: %text%',
	'messageReceived': '[in][time]%time%[/time]: [user]%name%[/user]: %text%[/in]',
	'userSplit': '[sys][time]%time%[/time]: Пользователь [user]%name%[/user] покинул чат.[/sys]'
};

class IO {

    constructor() {
        this.socket = null;
        this.isConnected = false;
        this.observers = [];

        this.messageReceived = this.messageReceived.bind(this);
    }

    // MARK: Connection

    connect(callback) {
        if (this.isConnected) {
            callback();
            return;
        }
        this.socket = io.connect('http://localhost:8081');
        let self = this;
        this.socket.on('connect', function() {
            self.socket.on('message', self.messageReceived);
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

    messageReceived(msg) {
        let string = strings[msg.event].replace('%time%', msg.time).replace('%name%', msg.name).replace('%text%', msg.text);
        if (!string) return;
        this.post(string);
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

}

const instance = new IO();

export default instance;