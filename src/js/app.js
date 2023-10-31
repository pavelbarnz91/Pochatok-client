import LogOrReg from "./api/LogOrReg";
import Chat from "./Chat.js";
import request from "./api/request.js";

class App {
    constructor() {
        this.appWindow = document.querySelector('[data-app="app"]');
        this.exitChatBtn = this.appWindow.querySelector('[data-chat="exit-btn"]');
        this.LogOrReg = new LogOrReg(this.appWindow);
        this.Chat = new Chat(this.appWindow);
        this.user = null;

        this.modalWindows();
        this.lastVisit();
    }

    modalWindows() {
        this.loginWindow();
    }

    loginWindow() {
        this.loginForm = document.forms['login-form'];

        this.loginForm.addEventListener('submit', async e => {
            e.preventDefault();

            this.user = await this.LogOrReg.login(this.loginForm);
            if(this.user) {
                this.Chat.start(this.user);
                this.saveState();
                this.exitChat();
            }
            
        })

        this.loginForm['login-window-reg-btn'].addEventListener('click', async () => {
            this.html = await request.getModalWindow('/get-reg-window');
            document.querySelector('[data-login="window-wrapper"]').remove();
            this.appWindow.insertAdjacentHTML('afterbegin', this.html);

            this.regWindow();
        })
    }

    regWindow() {
        this.regForm = document.forms['reg-form'];

        this.LogOrReg.regWindowAvatar();

        this.regForm.addEventListener('submit', async e => {
            e.preventDefault();

            const answer = await this.LogOrReg.registration(this.regForm);
            if(answer === null) return;
            this.user = answer.newUser;

            if(this.user) {
                this.Chat.start(this.user);
                this.saveState();
                this.exitChat();
            }
        })
        

        this.regForm['reg-window-cancel'].addEventListener('click', async () => {
            this.html = await request.getModalWindow('/get-login-window');
            document.querySelector('[data-registartion="window-wrapper"]').remove();
            this.appWindow.insertAdjacentHTML('afterbegin', this.html);

            this.loginWindow();
        })
    }

    saveState() {
        localStorage.setItem('user', JSON.stringify({
            user: this.user,
            lastVisit: new Date().getTime(),
        }));
    }

    lastVisit() {
        const currentTime = new Date().getTime();
        const userInfo = JSON.parse(localStorage.getItem('user')) || null;

        if(userInfo === null) return;
        if(currentTime - userInfo.lastVisit > 24 * 60 * 60 *1000) {
            localStorage.removeItem('user');
            return
        };

        this.user = userInfo.user;

        document.querySelector('[data-login="window-wrapper"]').remove();
        this.Chat.start(this.user);
        this.exitChat();
    }

    exitChat() {
        const exitChatFunction = async () => {
            this.Chat.exitChat();
            
            localStorage.removeItem('user');
            this.appWindow.insertAdjacentHTML('beforeend', await request.getModalWindow('/get-login-window'));
            this.modalWindows();

            this.exitChatBtn.removeEventListener('click', exitChatFunction);
        }

        this.exitChatBtn.addEventListener('click', exitChatFunction);
    }
}

new App();