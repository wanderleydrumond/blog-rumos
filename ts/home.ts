/*import User from './model/user';
import Post from './model/post';*/

// BLOCK Getting information from API
window.onload = () => {
    getUsers();
}


let postList: Array<Post> = [];
let userList: Array<User> = [];
const apiURLBase = 'https://jsonplaceholder.typicode.com/';
/**
 * The API gives me 100 posts, but I chose to get only 10 of them.
 * @date 6/3/2023 - 9:39:25 AM
 */
const getPosts = ():void => {
    fetch(apiURLBase + 'posts')
        .then((response) => response.json())
        .then((posts) => {
            for (let index = 0; index < 10; index++) {
                let postElement = new Post(posts[index].id, posts[index].title, posts[index].body);
                postElement.image = `../images/insta-post-${index}.png`;
                let abort: boolean = false;
                for (let i = 0; i < userList.length && !abort; i++){
                    abort = false;

                    if (userList[i].id === posts[index].userId) {
                        postElement.writerSet = userList[i];
                        abort = true;
                    }
                }
                postList.push(postElement);
            }
            console.log('postList', postList);
            postList.forEach(postElement => mountPost(postElement));
        });
}

/**
 * Gets 10 users from the API
 * @date 6/3/2023 - 10:12:46 AM
 */
const getUsers = ():void => {
    fetch(apiURLBase + 'users')
        .then((response) => response.json())
        .then((users) => {
            users.forEach((userElement: User, index: number) => {
                let user = new User(userElement.id, userElement.name, userElement.username, userElement.email);
                user.picture = `../images/author-${index}.png`;
                userList.push(user);
            });
            console.log('userList', userList);
        });
    setTimeout(() => {
        getPosts();
    }, 500);
}

// BLOCK Mounting elements
const featureList = document.getElementsByClassName("feature-list")[0];

const mountPost = (post:Post) => {
    // <li></li>
    const postElement = document.createElement("li");
    // <div class="card feature-card">
    const featureCard = document.createElement("div");
    featureCard.classList.add("card");
    featureCard.classList.add("feature-card");
    // <figure class="card-banner img-holder" style="--width: 1602; --height: 903;">
    const imageHolder = document.createElement("figure");
    imageHolder.classList.add("card-banner");
    imageHolder.classList.add("img-holder");
    // imageHolder.setAttribute("style", "--width: 1602; --height: 903;");
    imageHolder.style.setProperty('--width', '1602');
    imageHolder.style.setProperty('--height', '903');
    const postImage = document.createElement("img");
    postImage.classList.add("img-cover");
    postImage.src = post.image;
    postImage.width = 1603;
    postImage.height = 903;
    postImage.loading = "lazy";
    postImage.alt = "New York at night full of neon lights";
    // <div class="card-content">
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    // <div class="card-wrapper">
    const divCategoriesAndTime = document.createElement("div");
    divCategoriesAndTime.classList.add("card-wrapper");
    // <div class="card-tag">
    const divCategories = document.createElement("div");
    divCategories.classList.add("card-tag");
    // <a href="#" class="span hover-2">#Travel</a>
    const firstLink = document.createElement("a");
    firstLink.href = "#tags";
    firstLink.classList.add("span");
    firstLink.classList.add("hover-2");
    firstLink.innerText = "#Travel";
    // <a href="#" class="span hover-2">#Lifestyle</a>
    const secondLink = document.createElement("a");
    secondLink.href = "#tags";
    secondLink.classList.add("span");
    secondLink.classList.add("hover-2");
    secondLink.innerText = "#Lifestyle";
    // <div class="wrapper">
    const divTime = document.createElement("div");
    divTime.classList.add("wrapper");
    // <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
    const clockIcon = document.createElement("ion-icon");
    // @ts-ignore
    clockIcon.name = "time-outline";
    clockIcon.ariaHidden = "true";
    // <span class="span">3 mins read</span>
    const timeMessage = document.createElement("span");
    timeMessage.classList.add("span");
    timeMessage.innerText = "3 mins read";
    // <h3 class="headline headline-3"></h3>
    const postTitle = document.createElement("h3");
    postTitle.classList.add("headline");
    postTitle.classList.add("headline-3");
    // <a href="#" class="card-title hover-2">
    const postLink = document.createElement("a");
    postLink.href = "#"; // TODO inserir o link para a página do post em si
    postLink.classList.add("card-title");
    postLink.classList.add("hover-2");
    postLink.innerText = post.title;
    // <div class="card-wrapper">
    const divProfileAndReadMore = document.createElement("div");
    divProfileAndReadMore.classList.add("card-wrapper");
    // <div class="profile-card">
    const divProfile = document.createElement("div");
    divProfile.classList.add("profile-card");
    // <img src="../images/author-1.png" width="48" height="48" loading="lazy" alt="Joseph" class="profile-banner">
    const creatorPicture = document.createElement("img");
    creatorPicture.src = post.writerGet.picture;
    creatorPicture.width = 48;
    creatorPicture.height = 48;
    creatorPicture.loading = "lazy";
    creatorPicture.alt = post.writerGet.name;
    creatorPicture.classList.add("profile-banner");
    // <div></div>
    const divCreatorInformations = document.createElement("div");
    // <p class="card-title">Joseph</p>
    const creatorName = document.createElement("p");
    creatorName.classList.add("card-title");
    creatorName.innerText = post.writerGet.name;
    // <p class="card-subtitle">25 Nov 2022</p>
    const creationDate = document.createElement("p");
    creationDate.classList.add("card-subtitle");
    creationDate.innerText = "25 Nov 2022";
    // <a href="#" class="card-btn">Read more</a>
    const readMore = document.createElement("a");
    readMore.href = "#"; // TODO inserir o link para a página do post em si
    readMore.classList.add("card-btn");
    readMore.innerText = "Read more";
    // TODO inserir eventListener com o id do post

    divCategories.appendChild(document.createComment("firstLink"));
    divCategories.appendChild(firstLink);
    divCategories.appendChild(document.createComment("secondLink"));
    divCategories.appendChild(secondLink);
    divTime.appendChild(document.createComment("clockIcon"));
    divTime.appendChild(clockIcon);
    divTime.appendChild(document.createComment("timeMessage"));
    divTime.appendChild(timeMessage);
    divCategoriesAndTime.appendChild(document.createComment("divCategories"));
    divCategoriesAndTime.appendChild(divCategories);
    divCategoriesAndTime.appendChild(document.createComment("divTime"));
    divCategoriesAndTime.appendChild(divTime);

    postTitle.appendChild(document.createComment("postLink"));
    postTitle.appendChild(postLink);

    divCreatorInformations.appendChild(document.createComment("creatorName"));
    divCreatorInformations.appendChild(creatorName);
    divCreatorInformations.appendChild(document.createComment("creationDate"));
    divCreatorInformations.appendChild(creationDate);
    divProfile.appendChild(document.createComment("creatorPicture"));
    divProfile.appendChild(creatorPicture);
    divProfile.appendChild(document.createComment("divCreatorInformations"));
    divProfile.appendChild(divCreatorInformations);
    divProfileAndReadMore.appendChild(document.createComment("divProfile"));
    divProfileAndReadMore.appendChild(divProfile);
    divProfileAndReadMore.appendChild(document.createComment("readMore"));
    divProfileAndReadMore.appendChild(readMore);

    cardContent.appendChild(document.createComment("divCategoriesAndTime"));
    cardContent.appendChild(divCategoriesAndTime);
    cardContent.appendChild(document.createComment("postTitle"));
    cardContent.appendChild(postTitle);
    cardContent.appendChild(document.createComment("divProfileAndReadMore"));
    cardContent.appendChild(divProfileAndReadMore);

    imageHolder.appendChild(document.createComment("postImage"));
    imageHolder.appendChild(postImage);

    featureCard.appendChild(document.createComment("imageHolder"));
    featureCard.appendChild(imageHolder);
    featureCard.appendChild(document.createComment("cardContent"));
    featureCard.appendChild(cardContent);

    postElement.appendChild(document.createComment("featureCard"));
    postElement.appendChild(featureCard);

    featureList.appendChild(document.createComment("postElement"));
    featureList.appendChild(postElement);
};

// BLOCK Classes
// TODO TO BE DELETED?
class User {
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
}

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
}
