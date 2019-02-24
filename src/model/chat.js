import IO from './io';

// Создаем текст сообщений для событий
let strings = {
	'connected': '%time%: Вы успешно соединились к сервером как %name%.',
	'userJoined': '%time%: Пользователь %name% присоединился к чату.',
	'messageSent': '%time%: %name%: %text%',
	'messageReceived': '%time%: %name%: %text%',
	'userSplit': '%time%: Пользователь %name% покинул чат.'
};

export default class Chat {

    constructor(observer) {
        this.io = IO;
        this.text = "";

        this.io.addObserver(observer);
    }

    push(e) {
        let string = strings[e.event].replace('%time%', e.time).replace('%name%', e.name).replace('%text%', e.text);
        if (!string) return;
        if (this.text.length > 0) {
            this.text += "\n";
        }
        this.text += string;
    }

    send(message) {
        this.io.send(message);
    }

}