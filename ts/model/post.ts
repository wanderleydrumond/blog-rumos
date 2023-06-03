import User from "./user";

export class Post {
    _id: number;
    _title: string;
    _body: string;
    _image: string;
    _writer: User;

    constructor(id: number, title: string, body: string, image: string) {
        this._id = id;
        this._title = title;
        this._body = body;
        this._image = image;
    }

    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
}