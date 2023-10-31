(()=>{"use strict";const e={url:"https://github.com/pavelbarnz91/Pochatok-server:9090",getModalWindow:function(e){const s=new Headers;return s.append("Content-Type","text/plain"),fetch(this.url+e,{headers:s}).then((async e=>await e.text()))},regNewUser:function(e,s){const i=new Headers;return i.append("Content-Type","text/plain"),fetch(this.url+e,{method:"POST",headers:i,body:s}).then((async e=>await e.json()))},login:function(e,s){const i=new Headers;return i.append("Content-Type","text/plain"),fetch(this.url+e,{method:"POST",headers:i,body:s}).then((async e=>await e.json()))}},s={showTooltip:e=>{const s=document.querySelector(".tooltip");s&&s.remove();const i=document.createElement("DIV");i.classList.add("tooltip"),i.textContent=e,document.body.appendChild(i);const t=document.body.getBoundingClientRect().width;i.style.right=t/2-i.offsetWidth/2+"px",i.style.top="0px"},removeTooltip:()=>{const e=document.querySelector(".tooltip");e&&e.remove()}};class i{constructor(e){this.appWindow=e,this.userAvatar=null}async registration(i){if(!this.regValidity(i)){s.removeTooltip();const t=new FormData(i);null===this.userAvatar?t.set("avatar","null"):t.set("avatar",this.userAvatar);const a=await e.regNewUser("/registration",t);return a.status.result?(s.removeTooltip(),document.querySelector('[data-registartion="window-wrapper"]').remove(),a):(s.showTooltip(a.status.text),null)}}async login(i){if(!this.regValidity(i)){s.removeTooltip();const t=new FormData(i),a=await e.login("/login",t);return a.status?(s.removeTooltip(),document.querySelector('[data-login="window-wrapper"]').remove(),a.user):(s.showTooltip(a.text),null)}}regValidity(e){const i={nickname:{valueMissing:"Пердставьтесь пожалуйста!"},age:{valueMissing:"Сколько вам лет?"},city:{valueMissing:"Из какого вы города?"},email:{valueMissing:"Нам потребуется ваша почта!",typeMismatch:'Почта должна содержать символ "@"'},password:{tooShort:"Пароль должен быть не менее 6 символов!",valueMissing:"Придумайте пароль!"}};return Array.from(e.elements).some((e=>Object.keys(ValidityState.prototype).some((t=>{if(e.name&&"valid"!==t)return e.validity[t]?(s.showTooltip(i[e.name][t]),!0):void 0}))))}regWindowAvatar(){this.appWindow.querySelector('[data-registartion="input-avatar"]').addEventListener("change",(e=>{this.userAvatar=e.target.files[0];this.appWindow.querySelector('[data-registartion="avatar-image"]').style.backgroundImage=`url(${URL.createObjectURL(this.userAvatar)})`,URL.revokeObjectURL(this.userAvatar),e.target.value=""}))}}class t{static setEmojiWindow(){return'<div class="emoji-window">\n        <div class="emoji-window__item">😄</div>\n        <div class="emoji-window__item">😆</div>\n        <div class="emoji-window__item">😅</div>\n        <div class="emoji-window__item">🤣</div>\n        <div class="emoji-window__item">😂</div>\n        <div class="emoji-window__item">🙂</div>\n        <div class="emoji-window__item">🙃</div>\n        <div class="emoji-window__item">😉</div>\n        <div class="emoji-window__item">😊</div>\n        <div class="emoji-window__item">😇</div>\n        <div class="emoji-window__item">🥰</div>\n        <div class="emoji-window__item">😍</div>\n        <div class="emoji-window__item">😘</div>\n        <div class="emoji-window__item">😚</div>\n        <div class="emoji-window__item">😋</div>\n        <div class="emoji-window__item">😛</div>\n        <div class="emoji-window__item">😜</div>\n        <div class="emoji-window__item">🤪</div>\n        <div class="emoji-window__item">😝</div>\n        <div class="emoji-window__item">🤨</div>\n        <div class="emoji-window__item">😐</div>\n        <div class="emoji-window__item">😑</div>\n        <div class="emoji-window__item">😏</div>\n        <div class="emoji-window__item">😒</div>\n        <div class="emoji-window__item">🙄</div>\n        <div class="emoji-window__item">😎</div>\n        <div class="emoji-window__item">🥳</div>\n        <div class="emoji-window__item">🤯</div>\n        <div class="emoji-window__item">😵</div>\n        <div class="emoji-window__item">🥴</div>\n        <div class="emoji-window__item">🤧</div>\n        <div class="emoji-window__item">🤮</div>\n        <div class="emoji-window__item">🤢</div>\n        <div class="emoji-window__item">🤒</div>\n        <div class="emoji-window__item">😴</div>\n        <div class="emoji-window__item">🤤</div>\n        <div class="emoji-window__item">😪</div>\n        <div class="emoji-window__item">😔</div>\n        <div class="emoji-window__item">😟</div>\n        <div class="emoji-window__item">☹️</div>\n        <div class="emoji-window__item">😮</div>\n        <div class="emoji-window__item">😯</div>\n        <div class="emoji-window__item">😲</div>\n        <div class="emoji-window__item">😳</div>\n        <div class="emoji-window__item">😰</div>\n        <div class="emoji-window__item">😥</div>\n        <div class="emoji-window__item">😭</div>\n        <div class="emoji-window__item">😱</div>\n        <div class="emoji-window__item">😖</div>\n        <div class="emoji-window__item">😞</div>\n        <div class="emoji-window__item">😓</div>\n        <div class="emoji-window__item">😤</div>\n        <div class="emoji-window__item">😡</div>\n        <div class="emoji-window__item">🤬</div>\n        <div class="emoji-window__item">😈</div>\n        <div class="emoji-window__item">👿</div>\n        <div class="emoji-window__item">💩</div>\n        <div class="emoji-window__item">💋</div>\n        <div class="emoji-window__item">💯</div>\n        <div class="emoji-window__item">👋</div>\n        <div class="emoji-window__item">👈</div>\n        <div class="emoji-window__item">👉</div>\n        <div class="emoji-window__item">👆</div>\n        <div class="emoji-window__item">🖕</div>\n        <div class="emoji-window__item">👇</div>\n        <div class="emoji-window__item">☝️</div>\n        <div class="emoji-window__item">👍</div>\n        <div class="emoji-window__item">💪</div>\n        <div class="emoji-window__item">🙏</div>\n        <div class="emoji-window__item">💖</div>\n        <div class="emoji-window__item">💗</div>\n        <div class="emoji-window__item">💔</div>\n        <div class="emoji-window__item">❤️</div>\n    </div>'}static setMessageHtml(e){return`<div class="message">\n        <div class="message__user-avatar">\n            <img class="user-avatar__image" src="${e.userAvatar}">\n        </div>\n        <div class="message__content">\n            <div class="message__header">\n                <span class="header__name">${e.userNickname}</span>\n                <span class="header__date">${e.date}</span>\n            </div>\n            <div class="message__text-box">\n                <span class="message__text">${e.text}</span>\n            </div>\n        </div>\n    </div>`}static setYouMessageHtml(e){return`<div class="message you">\n        <div class="message__user-avatar">\n            <img class="user-avatar__image" src="${e.userAvatar}">\n        </div>\n        <div class="message__content">\n            <div class="message__header">\n                <span class="header__name you-name">${e.userNickname}</span>\n                <span class="header__date">${e.date}</span>\n            </div>\n            <div class="message__text-box">\n                <span class="message__text">${e.text}</span>\n            </div>\n        </div>\n    </div>`}}class a{constructor(e){this.appWindow=e,this.chat=this.appWindow.querySelector('[data-chat="chat-box"]'),this.header=this.appWindow.querySelector('[data-app-hedaer="header"]'),this.usersOnlineBtn=this.appWindow.querySelector('[data-users-online="show-list"]'),this.device=document.body.getBoundingClientRect(),this.userList()}userList(){if(this.device.width<400){this.appWindow.querySelector('[data-chat="user-list-pc"]').remove();const e='\n                    <div class="chat__user-list hidden" data-chat="user-list-pc">\n                        <div class="user-list__header">\n                            <span class="user-list__header-title">Сейчас в сети</span>\n                        </div>\n\n                        <div class="user-list__content-wrapper" data-user-list="users-online-wrapper">\n\n                            <div class="user-list__content" data-user-list="users-online"></div>\n                        </div>\n                    </div>';this.chat.insertAdjacentHTML("afterbegin",e),this.usersOnlineList=this.appWindow.querySelector('[data-chat="user-list-pc"]'),this.usersOnlineBtn.addEventListener("click",(()=>{this.usersOnlineList.classList.toggle("hidden")}))}}avatar(e){this.user=e,this.userAvatar=this.appWindow.querySelector('[data-app-header="avatar"]'),console.log(e),this.userAvatar.style.backgroundImage=`url(${this.user.avatar})`}}class n{constructor(e){this.appWindow=e,this.MobileAdaptive=new a(this.appWindow),this.userInput=this.appWindow.querySelector('[data-chat="user-input"]'),this.sendMessageBtn=this.appWindow.querySelector('[data-chat="send-message-btn"]'),this.messageArea=this.appWindow.querySelector('[data-chat="message-area"]'),this.usersOnlineList=this.appWindow.querySelector('[data-user-list="users-online"]'),this.clearUserInputBtn=this.appWindow.querySelector('[data-chat="clear-message-btn"]'),this.emojiBtn=this.appWindow.querySelector('[data-chat="emoji-btn"]'),this.emojiWrapper=this.appWindow.querySelector('[data-emoji="wrapper"]'),this.usersOnline=null,this.user=null,this.messages=null}start(e){this.MobileAdaptive.avatar(e),this.user=e,this.ws=new WebSocket("ws://localhost:9090"),this.userBtnsListeners(),this.ws.addEventListener("open",(()=>{const e={tag:"user connect",nickname:this.user.nickname,avatar:this.user.avatar,date:this.getThisDate()};this.ws.send(JSON.stringify(e))})),this.ws.addEventListener("message",(e=>{const s=JSON.parse(e.data);if("user connect"===s.tag)this.setUsersOnline(s),this.showAllMessages(s),this.messageArea.scrollTop=this.messageArea.scrollHeight;else if("user disconect"===s.tag){const e=`<div class="message-area__connect-new-user">\n                    <span class="connect-new-user__text">Пользователь ${s.userOut.nickname} покинул чат в ${this.getThisDate()}</span>\n                </div>`;this.messageArea.insertAdjacentHTML("beforeend",e),this.usersOnlineList.querySelector(`[data-user-id="${s.userOut.id}"]`).remove(),this.messageArea.scrollTop=this.messageArea.scrollHeight}else"user message"===s.tag&&(this.user.nickname===s.userNickname?(this.messageArea.insertAdjacentHTML("beforeend",t.setYouMessageHtml(s)),this.messageArea.scrollTop=this.messageArea.scrollHeight):(this.messageArea.insertAdjacentHTML("beforeend",t.setMessageHtml(s)),this.messageArea.scrollTop=this.messageArea.scrollHeight))})),this.ws.addEventListener("close",(e=>{const s={tag:"system message",nickname:this.user.nickname,avatar:this.user.avatar,date:this.getThisDate()};this.ws.send(JSON.stringify(s))}))}userBtnsListeners(){this.sendMessageBtn.addEventListener("click",(()=>{this.sendMessage()})),this.userInput.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),this.sendMessage())})),this.clearUserInputBtn.addEventListener("click",(()=>{this.userInput.value=""})),null!==this.emojiWrapper&&(this.emojiWrapper.innerHTML=t.setEmojiWindow(),this.emojiBtn.addEventListener("click",(()=>{this.emojiWrapper.classList.toggle("hidden")})),this.emojiWrapper.addEventListener("click",(e=>{e.target.classList.contains("emoji-window__item")&&(this.userInput.value+=e.target.innerHTML)})))}sendMessage(){if(""===this.userInput.value)return;const e={userNickname:this.user.nickname,userAvatar:this.user.avatar,date:this.getThisDate(),text:this.userInput.value,tag:"user message"};this.ws.send(JSON.stringify(e)),this.userInput.value=""}getThisDate(){const e=new Date;return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")} ${e.getDate().toString().padStart(2,"0")}.${(e.getMonth()+1).toString().padStart(2,"0")}.${e.getFullYear().toString()}`}setUsersOnline(e){this.usersOnline=e.clientsOnline,this.usersOnlineList.innerHTML="";for(let s in this.usersOnline)if(s===this.user.nickname){const i=`<div class="user" data-user-id="${e.clientsOnline[s].id}">\n                    <div class="user__avatar" data-user="avatar">\n                        <img class="user__avatar-image" src="${e.clientsOnline[s].avatar}">\n                    </div>\n                    <div class="user__name-box">\n                        <span class="user__name you-name">${s}</span>\n                    </div>\n                </div>`;this.usersOnlineList.insertAdjacentHTML("beforeend",i)}else{const i=`<div class="user" data-user-id="${e.clientsOnline[s].id}">\n                    <div class="user__avatar" data-user="avatar">\n                        <img class="user__avatar-image" src="${e.clientsOnline[s].avatar}">\n                    </div>\n                    <div class="user__name-box">\n                        <span class="user__name">${s}</span>\n                    </div>\n                </div>`;this.usersOnlineList.insertAdjacentHTML("beforeend",i)}}showAllMessages(e){this.messageArea.innerHTML="",e.actualMessages.forEach((e=>{if("system message"===e.tag){const s=`<div class="message-area__connect-new-user">\n                <span class="connect-new-user__text">${e.text}</span>\n            </div>`;this.messageArea.insertAdjacentHTML("beforeend",s)}else"user message"===e.tag&&(this.user.nickname===e.userNickname?(this.messageArea.insertAdjacentHTML("beforeend",t.setYouMessageHtml(e)),this.messageArea.scrollTop=this.messageArea.scrollHeight):(this.messageArea.insertAdjacentHTML("beforeend",t.setMessageHtml(e)),this.messageArea.scrollTop=this.messageArea.scrollHeight))}))}exitChat(){this.messageArea.innerHTML="",this.usersOnlineList.innerHTML="",this.userInput.value="",this.ws.close()}}new class{constructor(){this.appWindow=document.querySelector('[data-app="app"]'),this.exitChatBtn=this.appWindow.querySelector('[data-chat="exit-btn"]'),this.LogOrReg=new i(this.appWindow),this.Chat=new n(this.appWindow),this.user=null,this.modalWindows(),this.lastVisit()}modalWindows(){this.loginWindow()}loginWindow(){this.loginForm=document.forms["login-form"],this.loginForm.addEventListener("submit",(async e=>{e.preventDefault(),this.user=await this.LogOrReg.login(this.loginForm),this.user&&(this.Chat.start(this.user),this.saveState(),this.exitChat())})),this.loginForm["login-window-reg-btn"].addEventListener("click",(async()=>{this.html=await e.getModalWindow("/get-reg-window"),document.querySelector('[data-login="window-wrapper"]').remove(),this.appWindow.insertAdjacentHTML("afterbegin",this.html),this.regWindow()}))}regWindow(){this.regForm=document.forms["reg-form"],this.LogOrReg.regWindowAvatar(),this.regForm.addEventListener("submit",(async e=>{e.preventDefault();const s=await this.LogOrReg.registration(this.regForm);null!==s&&(this.user=s.newUser,this.user&&(this.Chat.start(this.user),this.saveState(),this.exitChat()))})),this.regForm["reg-window-cancel"].addEventListener("click",(async()=>{this.html=await e.getModalWindow("/get-login-window"),document.querySelector('[data-registartion="window-wrapper"]').remove(),this.appWindow.insertAdjacentHTML("afterbegin",this.html),this.loginWindow()}))}saveState(){localStorage.setItem("user",JSON.stringify({user:this.user,lastVisit:(new Date).getTime()}))}lastVisit(){const e=(new Date).getTime(),s=JSON.parse(localStorage.getItem("user"))||null;null!==s&&(e-s.lastVisit>864e5?localStorage.removeItem("user"):(this.user=s.user,document.querySelector('[data-login="window-wrapper"]').remove(),this.Chat.start(this.user),this.exitChat()))}exitChat(){const s=async()=>{this.Chat.exitChat(),localStorage.removeItem("user"),this.appWindow.insertAdjacentHTML("beforeend",await e.getModalWindow("/get-login-window")),this.modalWindows(),this.exitChatBtn.removeEventListener("click",s)};this.exitChatBtn.addEventListener("click",s)}}})();