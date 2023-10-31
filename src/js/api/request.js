const request = {
    // url: 'http://localhost:9090',
    url: 'https://github.com/pavelbarnz91/Pochatok-server:9090',

    getModalWindow: function (path) {
        return fetch(this.url + path).then(async response => {
            return await response.text()
        });
    },

    regNewUser: function (path, data) {
        return fetch(this.url + path, {
            method: 'POST',
            body: data,
        }).then(async response => {
            return await response.json();
        })
    },

    login: function (path, data) {
        return fetch(this.url + path, {
            method: 'POST',
            body: data,
        }).then(async response => {
            return await response.json();
        })
    }
}

export default request;