"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(id, title, body, image) {
        this._id = id;
        this._title = title;
        this._body = body;
        this._image = image;
    }
    Object.defineProperty(Post.prototype, "writer", {
        get: function () {
            return this._writer;
        },
        set: function (writer) {
            this._writer = writer;
        },
        enumerable: false,
        configurable: true
    });
    return Post;
}());
exports.Post = Post;
