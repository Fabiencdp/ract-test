const endpoint = 'https://jsonplaceholder.typicode.com/';

const call = (route) => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        const url = `${endpoint}${route}`;

        /**  Missing something ?? **/

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else if (request.readyState === 4) {
                console.error("error here");
                reject(request.responseText);
            }
        }
    });
};


const Api = {

    getPosts: () => {
        return call('posts');
    },

    getPost: (idPost) => {
        return call(`posts/${idPost}`);
    },

    getPostComments: (idPost) => {
        return [];
    },
};

export default Api;