// BLOCK Getting information from API
window.onload = () => {
    getUsers();
}

let postList: Array<Post> = [];
let userList: Array<User> = [];
/**
 * Gets 100 posts from the API.
 * @date 6/3/2023 - 9:39:25 AM
 */
const getPosts = ():void => {
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
}

/**
 * Gets 10 users from the API
 * @date 6/3/2023 - 10:12:46 AM
 */
const getUsers = ():void => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            users.forEach((userElement: User, index: number) => {
                let user = new User(userElement.id, userElement.name, userElement.username, userElement.email);
                user.picture = `../images/author-${index}.png`;
                userList.push(user);
            });
            console.log('userList', userList);
        });
        getPosts();
}

// BLOCK Classes

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