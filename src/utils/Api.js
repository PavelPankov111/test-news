class Api {
    constructor() {
        this.url = 'https://nomoreparties.co/news/v2/everything?';
        this.apiKey = '0afc2eada6d242128695911a777854c8'
    }

    request() {
        const now = new Date();
        const startDate = now.toISOString().slice(0, 10);
        now.setDate(now.getDate() - 7);
        const finishDate = now.toISOString().slice(0, 10);

        return fetch(`${this.url}q='Javascript'&apiKey=${this.apiKey}&from=${finishDate}&to=${startDate}&sortBy=publishedAt&pageSize=50`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
                return Promise.reject(`Error: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default Api;