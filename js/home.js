"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./model/user");
var post_1 = require("./model/post");
// BLOCK Getting information from API
window.onload = function () {
    getUsers();
};
var postList = [];
var userList = [];
var apiURLBase = 'https://jsonplaceholder.typicode.com/';
/**
 * The API gives me 100 posts, but I chose to get only 10 of them.
 * @date 6/3/2023 - 9:39:25 AM
 */
var getPosts = function () {
    fetch(apiURLBase + 'posts')
        .then(function (response) { return response.json(); })
        .then(function (posts) {
        for (var index = 0; index < 20; index++) {
            var postElement = new post_1.default(posts[index].id, posts[index].title, posts[index].body);
            postElement.image = "../images/insta-post-".concat(index, ".png");
            // BUG Tentei atualizar a lib mas não funcionou (https://stackoverflow.com/questions/31388787/doesnt-find-exist-on-any-kind-of-typescript-or-javascript-array/50954862#50954862)
            /*let writer = userList.find(userElement => userElement.id === posts[index].userId);

            if (writer) {
                postElement.writerSet = writer;
            }*/
            console.log('userList em getPosts', userList);
            console.log(postElement);
            var abort = false;
            for (var i = 0; i < userList.length && !abort; i++) {
                abort = false;
                if (userList[i].id === posts[index].userId) {
                    postElement.writerSet = userList[i];
                    abort = true;
                }
            }
            postList.push(postElement);
        }
        // console.log('postList', postList);
        postList.forEach(function (postElement) { return mountPost(postElement); });
    });
};
/**
 * Gets 10 users from the API
 * @date 6/3/2023 - 10:12:46 AM
 */
var getUsers = function () {
    fetch(apiURLBase + 'users')
        .then(function (response) { return response.json(); })
        .then(function (users) {
        users.forEach(function (userElement, index) {
            var user = new user_1.default(userElement.id, userElement.name, userElement.username, userElement.email);
            user.picture = "../images/author-".concat(index, ".png");
            userList.push(user);
        });
        // console.log('userList', userList);
    });
    setTimeout(function () {
        getPosts();
    }, 500);
};
// BLOCK Mounting elements
var featureList = document.getElementsByClassName("feature-list")[0];
var mountPost = function (post) {
    // <li></li>
    var postElement = document.createElement("li");
    // <div class="card feature-card">
    var featureCard = document.createElement("div");
    featureCard.classList.add("card");
    featureCard.classList.add("feature-card");
    // <figure class="card-banner img-holder" style="--width: 1602; --height: 903;">
    var imageHolder = document.createElement("figure");
    imageHolder.classList.add("card-banner");
    imageHolder.classList.add("img-holder");
    // imageHolder.setAttribute("style", "--width: 1602; --height: 903;");
    imageHolder.style.setProperty('--width', '1602');
    imageHolder.style.setProperty('--height', '903');
    var postImage = document.createElement("img");
    postImage.classList.add("img-cover");
    postImage.src = post.image;
    postImage.width = 1603;
    postImage.height = 903;
    postImage.loading = "lazy";
    postImage.alt = "New York at night full of neon lights";
    // <div class="card-content">
    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    // <div class="card-wrapper">
    var divCategoriesAndTime = document.createElement("div");
    divCategoriesAndTime.classList.add("card-content");
    // <div class="card-tag">
    var divCategories = document.createElement("div");
    divCategories.classList.add("card-tag");
    // <a href="#" class="span hover-2">#Travel</a>
    var firstLink = document.createElement("a");
    firstLink.href = "#tags";
    firstLink.classList.add("span");
    firstLink.classList.add("hover-2");
    firstLink.innerText = "#Travel";
    // <a href="#" class="span hover-2">#Lifestyle</a>
    var secondLink = document.createElement("a");
    secondLink.href = "#tags";
    secondLink.classList.add("span");
    secondLink.classList.add("hover-2");
    secondLink.innerText = "#Lifestyle";
    // <div class="wrapper">
    var divTime = document.createElement("div");
    divTime.classList.add("wrapper");
    // <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    var clockIcon = document.createElement("ion-icon");
    // @ts-ignore
    clockIcon.name = "time-outline";
    clockIcon.ariaHidden = "true";
    // <span class="span">3 mins read</span>
    var timeMessage = document.createElement("span");
    timeMessage.classList.add("span");
    // <h3 class="headline headline-3"></h3>
    var postTitle = document.createElement("h3");
    postTitle.classList.add("headline");
    postTitle.classList.add("headline-3");
    // <a href="#" class="card-title hover-2">
    var postLink = document.createElement("a");
    postLink.href = "#"; // TODO inserir o link para a página do post em si
    postLink.classList.add("card-title");
    postLink.classList.add("hover-2");
    postLink.innerText = post.title;
    // <div class="card-wrapper">
    var divProfileAndReadMore = document.createElement("div");
    divProfileAndReadMore.classList.add("card-wrapper");
    // <div class="profile-card">
    var divProfile = document.createElement("div");
    divProfile.classList.add("profile-card");
    // <img src="../images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph" class="profile-banner">
    var creatorPicture = document.createElement("img");
    creatorPicture.src = post.writerGet.picture;
    creatorPicture.width = 48;
    creatorPicture.height = 48;
    creatorPicture.loading = "lazy";
    creatorPicture.alt = post.writerGet.name;
    creatorPicture.classList.add("profile-banner");
    // <div></div>
    var divCreatorInformations = document.createElement("div");
    // <p class="card-title">Joseph</p>
    var creatorName = document.createElement("p");
    creatorName.classList.add("card-title");
    creatorName.innerText = post.writerGet.name;
    // <p class="card-subtitle">25 Nov 2022</p>
    var creationDate = document.createElement("p");
    creationDate.classList.add("card-subtitle");
    creationDate.innerText = "25 Nov 2022";
    // <a href="#" class="card-btn">Read more</a>
    var readMore = document.createElement("a");
    readMore.href = "#"; // TODO inserir o link para a página do post em si
    readMore.classList.add("card-btn");
    readMore.innerText = "Read more";
    // TODO inserir eventListener com o id do post
    divCategories.appendChild(firstLink);
    divCategories.appendChild(secondLink);
    divTime.appendChild(clockIcon);
    divTime.appendChild(timeMessage);
    divCategoriesAndTime.appendChild(divCategories);
    divCategoriesAndTime.appendChild(divTime);
    postTitle.appendChild(postLink);
    divCreatorInformations.appendChild(creatorName);
    divCreatorInformations.appendChild(creationDate);
    divProfile.appendChild(creatorPicture);
    divProfile.appendChild(divCreatorInformations);
    divProfileAndReadMore.appendChild(divProfile);
    divProfileAndReadMore.appendChild(readMore);
    cardContent.appendChild(divCategoriesAndTime);
    cardContent.appendChild(postTitle);
    cardContent.appendChild(divProfileAndReadMore);
    postElement.appendChild(featureCard);
    postElement.appendChild(cardContent);
    featureList.appendChild(postElement);
};
// BLOCK Classes
// TODO TO BE DELETED?
/*class User {
    id!: number;
    name!: string;
    username!: string;
    email!: string;
    picture!: string;

    constructor(id: number, name: string, username: string, email: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}*/
/*
class Post {
    id!: number;
    title!: string;
    body!: string;
    image?: string;
    private writer!: User;

    constructor(id: number, title: string, body: string) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    get writerGet() {
        return this.writer;
    }
    set writerSet(writer: User) {
        this.writer = writer;
    }
}*/
