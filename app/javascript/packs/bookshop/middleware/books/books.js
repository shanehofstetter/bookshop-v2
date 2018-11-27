const all = () => {
    return fetch('/api/v1/books').then(response => response.json()).catch(console.error);
};

const byId = (id) => {
    return fetch(`/api/v1/books/${id}`).then(response => response.json()).catch(console.error);
};

export const BooksApi = {
    all,
    byId
};