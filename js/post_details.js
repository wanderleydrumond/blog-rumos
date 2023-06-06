const parameters = new URLSearchParams(window.location.search);
const postId = parameters.get("postId");
const apiURLBaseComments = 'https://jsonplaceholder.typicode.com/';
window.onload = () => {
    getPostById();
    getCommentsByPostId();
};
// BLOCK Classes
class PostComment {
    id;
    title;
    body;
    emailWriter;
    pictureWriter;
    constructor(id, title, body, emailWriter) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.emailWriter = emailWriter;
    }
}
// BLOCK Getting information from API
let globalPost;
const getPostById = () => {
    fetch(apiURLBaseComments + 'posts/' + postId)
        .then((response) => response.json())
        .then((post) => {
        globalPost = post;
        console.log("globalPost", globalPost);
    });
};
let globalComments = [];
const getCommentsByPostId = () => {
    fetch(apiURLBaseComments + 'comments?postId=' + postId)
        .then((response) => response.json())
        .then((commentsResponse) => {
        commentsResponse.forEach((commentElement, index) => {
            let comment = new PostComment(commentElement.id, commentElement.title, commentElement.body, commentElement.email);
            comment.pictureWriter = `../images/author-${index}.png`;
            globalComments.push(comment);
        });
        console.log("globalComment", globalComments);
        globalComments.forEach((commentElement) => mountComment(commentElement));
    });
};
// BLOCK Mounting elements
const divComments = document.getElementsByClassName("wrapper")[0];
const mountComment = (comment) => {
    console.log("comment", comment);
    // <div class="box">
    const divComment = document.createElement("div");
    divComment.classList.add("box");
    // <i class="fas fa-quote-left quote"></i>
    const iconQuote = document.createElement("i");
    iconQuote.classList.add("fas");
    iconQuote.classList.add("fa-quote-left");
    iconQuote.classList.add("quote");
    // <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits.</p>
    const commentBody = document.createElement("p");
    commentBody.innerText = comment.body;
    // <div class="content">
    const divContent = document.createElement("div");
    divContent.classList.add("content");
    // <div class="info">
    const divInfo = document.createElement("div");
    divInfo.classList.add("info");
    // <div class="name">Alex Smith</div>
    const divName = document.createElement("div");
    divName.classList.add("name");
    divName.innerText = comment.emailWriter;
    // <div class="image">
    const divPicture = document.createElement("div");
    divPicture.classList.add("image");
    // <img src="../images/author-2.png" alt="Bret">
    const picture = document.createElement("img");
    picture.src = comment.pictureWriter;
    divInfo.appendChild(divName);
    divPicture.appendChild(picture);
    divContent.appendChild(divInfo);
    divContent.appendChild(divPicture);
    divComment.appendChild(iconQuote);
    divComment.appendChild(commentBody);
    divComment.appendChild(divContent);
    divComments.appendChild(divComment);
};
//# sourceMappingURL=post_details.js.map