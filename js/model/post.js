export default class Post {
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
//# sourceMappingURL=post.js.map