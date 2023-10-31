import SetHtml from "./api/SetHtml.js";
import MobileAdaptive from "./MobileAdaptive.js";

export default class Chat {
    constructor(app) {
        this.appWindow = app;
        this.MobileAdaptive = new MobileAdaptive(this.appWindow);
        this.userInput = this.appWindow.querySelector('[data-chat="user-input"]');
        this.sendMessageBtn = this.appWindow.querySelector('[data-chat="send-message-btn"]');
        this.messageArea = this.appWindow.querySelector('[data-chat="message-area"]');
        this.usersOnlineList = this.appWindow.querySelector('[data-user-list="users-online"]');
        this.clearUserInputBtn = this.appWindow.querySelector('[data-chat="clear-message-btn"]');
        this.emojiBtn = this.appWindow.querySelector('[data-chat="emoji-btn"]');
        this.emojiWrapper = this.appWindow.querySelector('[data-emoji="wrapper"]');
       
        this.usersOnline = null;
        this.user = null;
        this.messages = null;
    }

    start(user) {
        this.MobileAdaptive.avatar(user);
        this.user = user;
        // this.userWidget();
        this.ws = new WebSocket('wss://pochatok-sever.onrender.com');
        this.userBtnsListeners();

        this.ws.addEventListener('open', () => {
            const connectUesr = {
                tag: 'user connect',
                nickname: this.user.nickname,
                avatar: this.user.avatar,
                date: this.getThisDate(),
            }

            this.ws.send(JSON.stringify(connectUesr));
        })

        this.ws.addEventListener('message', e => {
            const answer = JSON.parse(e.data);

            if(answer.tag === 'user connect') {
                this.setUsersOnline(answer);
                this.showAllMessages(answer);
                this.messageArea.scrollTop = this.messageArea.scrollHeight;
            } else if(answer.tag === 'user disconect') {  
                const html = `<div class="message-area__connect-new-user">
                    <span class="connect-new-user__text">Пользователь ${answer.userOut.nickname} покинул чат в ${this.getThisDate()}</span>
                </div>`

                this.messageArea.insertAdjacentHTML('beforeend', html);
                this.usersOnlineList.querySelector(`[data-user-id="${answer.userOut.id}"]`).remove();

                this.messageArea.scrollTop = this.messageArea.scrollHeight;
            } else if(answer.tag === 'user message') {
                if(this.user.nickname === answer.userNickname) {
                    this.messageArea.insertAdjacentHTML('beforeend', SetHtml.setYouMessageHtml(answer));
                    this.messageArea.scrollTop = this.messageArea.scrollHeight;
                } else {
                    this.messageArea.insertAdjacentHTML('beforeend', SetHtml.setMessageHtml(answer));
                    this.messageArea.scrollTop = this.messageArea.scrollHeight;
                }
            }
        })

        this.ws.addEventListener('close', e => {
            const disconnectUesr = {
                tag: 'system message',
                nickname: this.user.nickname,
                avatar: this.user.avatar,
                date: this.getThisDate(),
            }

            this.ws.send(JSON.stringify(disconnectUesr));
        })
    }

    userBtnsListeners() {
        this.sendMessageBtn.addEventListener('click', () => {
            this.sendMessage();
        });

        this.userInput.addEventListener('keydown', e => {
            if(e.key === 'Enter') {
                e.preventDefault();
                this.sendMessage();
            }
        })

        this.clearUserInputBtn.addEventListener('click', () => {
            this.userInput.value = "";
        })

        if(this.emojiWrapper !== null) {
            this.emojiWrapper.innerHTML = SetHtml.setEmojiWindow();
            this.emojiBtn.addEventListener('click', () => {
                this.emojiWrapper.classList.toggle('hidden');
            });

            this.emojiWrapper.addEventListener('click', e => {
                if(e.target.classList.contains('emoji-window__item')) {
                    this.userInput.value += e.target.innerHTML;
                };
            })
        }; 
    }

    sendMessage() {
        if(this.userInput.value === "") return;
        const message = {
            userNickname: this.user.nickname,
            userAvatar: this.user.avatar,
            date: this.getThisDate(),
            text: this.userInput.value,
            tag: 'user message',
        };

        this.ws.send(JSON.stringify(message));
        this.userInput.value = "";
    }

    getThisDate() {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }

    setUsersOnline(data) {
        this.usersOnline = data.clientsOnline;
        this.usersOnlineList.innerHTML = '';
        
        for(let key in this.usersOnline) {
            if(key === this.user.nickname) {
                const html = `<div class="user" data-user-id="${data.clientsOnline[key].id}">
                    <div class="user__avatar" data-user="avatar">
                        <img class="user__avatar-image" src="${data.clientsOnline[key].avatar}">
                    </div>
                    <div class="user__name-box">
                        <span class="user__name you-name">${key}</span>
                    </div>
                </div>`

                this.usersOnlineList.insertAdjacentHTML('beforeend', html);
            } else {
                const html = `<div class="user" data-user-id="${data.clientsOnline[key].id}">
                    <div class="user__avatar" data-user="avatar">
                        <img class="user__avatar-image" src="${data.clientsOnline[key].avatar}">
                    </div>
                    <div class="user__name-box">
                        <span class="user__name">${key}</span>
                    </div>
                </div>`
    
                this.usersOnlineList.insertAdjacentHTML('beforeend', html);
            }
        }
    }

    showAllMessages(data) {
        this.messageArea.innerHTML = '';

        data.actualMessages.forEach(m => {
            if(m.tag === 'system message') {
                const html = `<div class="message-area__connect-new-user">
                <span class="connect-new-user__text">${m.text}</span>
            </div>`

                this.messageArea.insertAdjacentHTML('beforeend', html);
            } else if(m.tag === 'user message') {
                if(this.user.nickname === m.userNickname) {
                    this.messageArea.insertAdjacentHTML('beforeend', SetHtml.setYouMessageHtml(m));
                    this.messageArea.scrollTop = this.messageArea.scrollHeight;
                } else {
                    this.messageArea.insertAdjacentHTML('beforeend', SetHtml.setMessageHtml(m));
                    this.messageArea.scrollTop = this.messageArea.scrollHeight;
                }
            }
        })
    }

    exitChat() {
        this.messageArea.innerHTML = "";
        this.usersOnlineList.innerHTML = "";
        this.userInput.value = "";
        this.ws.close();
    }
}