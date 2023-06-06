import User from "./user";

export default class Post {
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