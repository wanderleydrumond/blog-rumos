"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Post;
