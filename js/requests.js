"use strict";
// import { Post } from "./model/post";
// import User from "./model/user";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
// BLOCK Getting information from API
window.onload = function () {
    (0, exports.getUsers)();
};
var postList = [];
var userList = [];
/**
 * Gets 100 posts from the API.
 * @date 6/3/2023 - 9:39:25 AM
 */
var getPosts = function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) { return response.json(); })
        .then(function (posts) {
        var _loop_1 = function (index) {
            var postElement = new Post(posts[index].id, posts[index].title, posts[index].body);
            postElement.image = "../images/insta-post-".concat(index, ".png");
            // BUG Tentei atualizar a lib mas não funcionou (https://stackoverflow.com/questions/31388787/doesnt-find-exist-on-any-kind-of-typescript-or-javascript-array/50954862#50954862)
            /*let writer = userList.find(userElement => userElement.id === posts[index].userId);

            if (writer) {
                postElement.writerSet = writer;
            }*/
            userList.forEach(function (userElement) {
                if (userElement.id === posts[index].userId) {
                    postElement.writerSet = userElement;
                }
            });
            postList.push(postElement);
        };
        for (var index = 0; index < 10; index++) {
            _loop_1(index);
        }
        console.log('postList', postList);
    });
    return postList;
};
/**
 * Gets 10 users from the API
 * @date 6/3/2023 - 10:12:46 AM
 */
var getUsers = function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) { return response.json(); })
        .then(function (users) {
        users.forEach(function (userElement, index) {
            var user = new User(userElement.id, userElement.name, userElement.username, userElement.email);
            user.picture = "../images/author-".concat(index, ".png");
            userList.push(user);
        });
        console.log('userList', userList);
    });
    return getPosts();
    // return userList;
};
exports.getUsers = getUsers;
// BLOCK Classes
var User = /** @class */ (function () {
    function User(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
    return User;
}());
var Post = /** @class */ (function () {
    function Post(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
    Object.defineProperty(Post.prototype, "writerGet", {
        get: function () {
            return this.writer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "writerSet", {
        set: function (writer) {
            this.writer = writer;
        },
        enumerable: false,
        configurable: true
    });
    return Post;
}());
