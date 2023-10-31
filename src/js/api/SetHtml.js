export default class SetHtml {
    static setEmojiWindow () {
        const emojiWindow = `<div class="emoji-window">
        <div class="emoji-window__item">😄</div>
        <div class="emoji-window__item">😆</div>
        <div class="emoji-window__item">😅</div>
        <div class="emoji-window__item">🤣</div>
        <div class="emoji-window__item">😂</div>
        <div class="emoji-window__item">🙂</div>
        <div class="emoji-window__item">🙃</div>
        <div class="emoji-window__item">😉</div>
        <div class="emoji-window__item">😊</div>
        <div class="emoji-window__item">😇</div>
        <div class="emoji-window__item">🥰</div>
        <div class="emoji-window__item">😍</div>
        <div class="emoji-window__item">😘</div>
        <div class="emoji-window__item">😚</div>
        <div class="emoji-window__item">😋</div>
        <div class="emoji-window__item">😛</div>
        <div class="emoji-window__item">😜</div>
        <div class="emoji-window__item">🤪</div>
        <div class="emoji-window__item">😝</div>
        <div class="emoji-window__item">🤨</div>
        <div class="emoji-window__item">😐</div>
        <div class="emoji-window__item">😑</div>
        <div class="emoji-window__item">😏</div>
        <div class="emoji-window__item">😒</div>
        <div class="emoji-window__item">🙄</div>
        <div class="emoji-window__item">😎</div>
        <div class="emoji-window__item">🥳</div>
        <div class="emoji-window__item">🤯</div>
        <div class="emoji-window__item">😵</div>
        <div class="emoji-window__item">🥴</div>
        <div class="emoji-window__item">🤧</div>
        <div class="emoji-window__item">🤮</div>
        <div class="emoji-window__item">🤢</div>
        <div class="emoji-window__item">🤒</div>
        <div class="emoji-window__item">😴</div>
        <div class="emoji-window__item">🤤</div>
        <div class="emoji-window__item">😪</div>
        <div class="emoji-window__item">😔</div>
        <div class="emoji-window__item">😟</div>
        <div class="emoji-window__item">☹️</div>
        <div class="emoji-window__item">😮</div>
        <div class="emoji-window__item">😯</div>
        <div class="emoji-window__item">😲</div>
        <div class="emoji-window__item">😳</div>
        <div class="emoji-window__item">😰</div>
        <div class="emoji-window__item">😥</div>
        <div class="emoji-window__item">😭</div>
        <div class="emoji-window__item">😱</div>
        <div class="emoji-window__item">😖</div>
        <div class="emoji-window__item">😞</div>
        <div class="emoji-window__item">😓</div>
        <div class="emoji-window__item">😤</div>
        <div class="emoji-window__item">😡</div>
        <div class="emoji-window__item">🤬</div>
        <div class="emoji-window__item">😈</div>
        <div class="emoji-window__item">👿</div>
        <div class="emoji-window__item">💩</div>
        <div class="emoji-window__item">💋</div>
        <div class="emoji-window__item">💯</div>
        <div class="emoji-window__item">👋</div>
        <div class="emoji-window__item">👈</div>
        <div class="emoji-window__item">👉</div>
        <div class="emoji-window__item">👆</div>
        <div class="emoji-window__item">🖕</div>
        <div class="emoji-window__item">👇</div>
        <div class="emoji-window__item">☝️</div>
        <div class="emoji-window__item">👍</div>
        <div class="emoji-window__item">💪</div>
        <div class="emoji-window__item">🙏</div>
        <div class="emoji-window__item">💖</div>
        <div class="emoji-window__item">💗</div>
        <div class="emoji-window__item">💔</div>
        <div class="emoji-window__item">❤️</div>
    </div>`

    return emojiWindow;
    };

    static setMessageHtml(message) {
        return `<div class="message">
        <div class="message__user-avatar">
            <img class="user-avatar__image" src="${message.userAvatar}">
        </div>
        <div class="message__content">
            <div class="message__header">
                <span class="header__name">${message.userNickname}</span>
                <span class="header__date">${message.date}</span>
            </div>
            <div class="message__text-box">
                <span class="message__text">${message.text}</span>
            </div>
        </div>
    </div>`
    }

    static setYouMessageHtml(message) {
        return `<div class="message you">
        <div class="message__user-avatar">
            <img class="user-avatar__image" src="${message.userAvatar}">
        </div>
        <div class="message__content">
            <div class="message__header">
                <span class="header__name you-name">${message.userNickname}</span>
                <span class="header__date">${message.date}</span>
            </div>
            <div class="message__text-box">
                <span class="message__text">${message.text}</span>
            </div>
        </div>
    </div>`
    }
}