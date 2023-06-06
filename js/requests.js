// import { Post } from "./model/post";
// import User from "./model/user";
// BLOCK Getting information from API
window.onload = () => {
    getUsers();
};
let postList = [];
let userList = [];
/**
 * Gets 100 posts from the API.
 * @date 6/3/2023 - 9:39:25 AM
 */
const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
        for (let index = 0; index < 10; index++) {
            let postElement = new Post(posts[index].id, posts[index].title, posts[index].body);
            postElement.image = `../images/insta-post-${index}.png`;
            // BUG Tentei atualizar a lib mas não funcionou (https://stackoverflow.com/questions/31388787/doesnt-find-exist-on-any-kind-of-typescript-or-javascript-array/50954862#50954862)
            /*let writer = userList.find(userElement => userElement.id === posts[index].userId);

            if (writer) {
                postElement.writerSet = writer;
            }*/
            userList.forEach(userElement => {
                if (userElement.id === posts[index].userId) {
                    postElement.writerSet = userElement;
                }
            });
            postList.push(postElement);
        }
        console.log('postList', postList);
    });
    return postList;
};
/**
 * Gets 10 users from the API
 * @date 6/3/2023 - 10:12:46 AM
 */
export const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
        users.forEach((userElement, index) => {
            let user = new User(userElement.id, userElement.name, userElement.username, userElement.email);
            user.picture = `../images/author-${index}.png`;
            userList.push(user);
        });
        console.log('userList', userList);
    });
    return getPosts();
    // return userList;
};
// BLOCK Classes
class User {
    id;
    name;
    username;
    email;
    picture;
    constructor(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}
class Post {
    id;
    title;
    body;
    image;
    writer;
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
    get writerGet() {
        return this.writer;
    }
    set writerSet(writer) {
        this.writer = writer;
    }
}
//# sourceMappingURL=requests.js.map