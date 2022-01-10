"use strict";
/*
а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.
* */

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post = new Post("AuthorA N.N", "Lorem ipsum dolor sit amet", new Date());
console.log(`Post text: ${post.text}`);
post.edit("Edited post");
console.log(post);
let attachedPost = new AttachedPost("AuthorB N.N", "Lorem ipsum dolor sit amet", new Date());
console.log(`TextHighlighted ${attachedPost.highlighted}`);
attachedPost.makeTextHighlighted();
console.log(attachedPost);
