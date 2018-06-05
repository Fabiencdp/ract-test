import Debug from 'debug';
const debug = Debug('app:api');

const endpoint = 'https://jsonplaceholder.typicode.com/';

const call = (route) => {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();
    const url = `${endpoint}${route}`;

    // *
    // Run our call in async mode
    request.open('GET', url, true);
    request.send();

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      } else if (request.readyState === 4) {
        debug("Api Request error", request);
        reject(request);
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
    return call(`posts/${idPost}/comments`);
  },
};

export default Api;