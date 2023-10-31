import request from "./request.js";
import tooltip from "./tooltip.js";

export default class LogOrReg {
    constructor(app) {
        this.appWindow = app;
        this.userAvatar = null;
    }

    async registration(regForm) {
            if(!this.regValidity(regForm)) {
                tooltip.removeTooltip();

                const fd = new FormData(regForm);

                if(this.userAvatar === null) {
                    fd.set('avatar', 'null');
                } else {
                    fd.set('avatar', this.userAvatar);
                }

                const response = await request.regNewUser('/registration', fd);

                if(response.status.result) {
                    tooltip.removeTooltip();
                    document.querySelector('[data-registartion="window-wrapper"]').remove();
                    return response;
                } else {
                    tooltip.showTooltip(response.status.text);
                    return null;
                }
            };
    }

    async login(loginForm) {
        if(!this.regValidity(loginForm)) {
            tooltip.removeTooltip();

            const fd = new FormData(loginForm);

            const response = await request.login('/login', fd);

            if(response.status) {
                tooltip.removeTooltip();
                document.querySelector('[data-login="window-wrapper"]').remove();
                return response.user;
            } else {
                tooltip.showTooltip(response.text);
                return null;
            }
        };
    }

    regValidity(form) {
        const errors = {
            nickname: {
                valueMissing: 'Пердставьтесь пожалуйста!',
            },
            age: {
                valueMissing: 'Сколько вам лет?'
            },
            city: {
                valueMissing: 'Из какого вы города?',
            },
            email: {
                valueMissing: 'Нам потребуется ваша почта!',
                typeMismatch: 'Почта должна содержать символ "@"',
            },
            password: {
                tooShort: 'Пароль должен быть не менее 6 символов!',
                valueMissing: 'Придумайте пароль!',
            }
        };

        const formElements = Array.from(form.elements);
        
        return formElements.some(el => {
            return Object.keys(ValidityState.prototype).some(key => {
                if(!el.name || key === 'valid') return;

                
                if(el.validity[key]) {
                    tooltip.showTooltip(errors[el.name][key]);
                    return true;
                }
            })
        })
    }

    regWindowAvatar() {
        const avatarFile = this.appWindow.querySelector('[data-registartion="input-avatar"]');

        avatarFile.addEventListener('change', e => {
            this.userAvatar = e.target.files[0];
            const avatarBox = this.appWindow.querySelector('[data-registartion="avatar-image"]');
            avatarBox.style.backgroundImage = `url(${URL.createObjectURL(this.userAvatar)})`
            URL.revokeObjectURL(this.userAvatar);
            e.target.value = "";
        })
    }
}