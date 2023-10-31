export default class MobileAdaptive {
    constructor(app) {
        this.appWindow = app;
        this.chat = this.appWindow.querySelector('[data-chat="chat-box"]');
        this.header = this.appWindow.querySelector('[data-app-hedaer="header"]');
        this.usersOnlineBtn = this.appWindow.querySelector('[data-users-online="show-list"]');
        this.device = document.body.getBoundingClientRect();

        this.userList();
    }

    userList() {
        if(this.device.width < 400) {
            this.appWindow.querySelector('[data-chat="user-list-pc"]').remove();
            const userListHtml = `
                    <div class="chat__user-list hidden" data-chat="user-list-pc">
                        <div class="user-list__header">
                            <span class="user-list__header-title">Сейчас в сети</span>
                        </div>

                        <div class="user-list__content-wrapper" data-user-list="users-online-wrapper">

                            <div class="user-list__content" data-user-list="users-online"></div>
                        </div>
                    </div>`

            this.chat.insertAdjacentHTML('afterbegin', userListHtml);
            this.usersOnlineList = this.appWindow.querySelector('[data-chat="user-list-pc"]')

            this.usersOnlineBtn.addEventListener('click', () => {
                this.usersOnlineList.classList.toggle('hidden');
            })
        };
        
    }

    avatar(user) {
        this.user = user;
        this.userAvatar = this.appWindow.querySelector('[data-app-header="avatar"]');

        console.log(user);

        this.userAvatar.style.backgroundImage = `url(${this.user.avatar})`
    }
}