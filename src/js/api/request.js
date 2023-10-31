const request = {
    // url: 'http://localhost:9090',
    url: 'https://github.com/pavelbarnz91/Pochatok-server:9090',

    getModalWindow: function (path) {
        const headers = new Headers();
        headers.append('Content-Type', 'text/plain');

        return fetch(this.url + path, {
            headers: headers
          }).then(async response => {
            return await response.text();
          });
    },

    regNewUser: function (path, data) {
        const headers = new Headers();
        headers.append('Content-Type', 'text/plain');

        return fetch(this.url + path, {
            method: 'POST',
            headers: headers,
            body: data,
          }).then(async response => {
            return await response.json();
          });
    },

    login: function (path, data) {
        const headers = new Headers();
        headers.append('Content-Type', 'text/plain');

        return fetch(this.url + path, {
            method: 'POST',
            headers: headers,
            body: data,
          }).then(async response => {
            return await response.json();
          });
    }
}

export default request;