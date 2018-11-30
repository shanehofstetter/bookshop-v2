import axios from 'axios';

const all = () => {
    return axios.get('/api/v1/books').then(({data}) => data).catch(console.error);
};

const byId = (id) => {
    return axios.get(`/api/v1/books/${id}`).then(({data}) => data).catch(console.error);
};

const create = (book) => {
    return axios.post('/api/v1/books', {book}).then(({data}) => data).catch(e => {
        if (e.response && e.response.data) {
            return Promise.reject(e.response.data);
        }
    });
};

export const BooksApi = {
    all,
    byId,
    create
};