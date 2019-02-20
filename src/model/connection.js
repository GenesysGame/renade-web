import io from 'socket.io-client';
 
var socket = null;

// Создаем текст сообщений для событий
let strings = {
	'connected': '[sys][time]%time%[/time]: Вы успешно соединились к сервером как [user]%name%[/user].[/sys]',
	'userJoined': '[sys][time]%time%[/time]: Пользователь [user]%name%[/user] присоединился к чату.[/sys]',
	'messageSent': '[out][time]%time%[/time]: [user]%name%[/user]: %text%[/out]',
	'messageReceived': '[in][time]%time%[/time]: [user]%name%[/user]: %text%[/in]',
	'userSplit': '[sys][time]%time%[/time]: Пользователь [user]%name%[/user] покинул чат.[/sys]'
};

export default function connect(callback) {
    console.log('Try connect to the server...');
    socket = io.connect('http://localhost:8081');
    socket.on('connect', function() {
        console.log('Connected!');
        callback();
    });
}