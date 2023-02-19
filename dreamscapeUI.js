"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dreamContainer = document.querySelector('.dreamContainer');
const LoadDreams = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("./list.json");
    const data = yield response.json();
    if (dreamContainer) {
        dreamContainer.innerText = '';
        for (const item of data) {
            const div = document.createElement('div');
            div.setAttribute('class', 'dreamDiv');
            const dreamImg = document.createElement('img');
            dreamImg.setAttribute('class', 'dreamImg');
            const mainContainer = document.createElement('div');
            mainContainer.setAttribute('class', 'mainContainer');
            const ownerDiv = document.createElement('div');
            ownerDiv.setAttribute('class', 'rowDiv');
            const title = document.createElement('a');
            title.setAttribute('id', 'title');
            title.addEventListener('click', () => { viewEntry(item); });
            const by = document.createElement('p');
            const author = document.createElement('a');
            author.setAttribute('id', 'author');
            author.addEventListener('click', () => { viewAuthor(item); });
            const genre = document.createElement('a');
            genre.setAttribute('id', 'genre');
            const body = document.createElement('p');
            title.setAttribute('class', 'titleAndAuthor');
            const responseDiv = document.createElement('div');
            responseDiv.setAttribute('class', 'responseDiv');
            const comment = document.createElement('p');
            comment.setAttribute('id', 'comment');
            const likes = document.createElement('p');
            likes.setAttribute('id', 'likes');
            title.innerText = item.title;
            by.innerText = 'by';
            author.innerText = item.author;
            genre.innerHTML = ' - ' + item.genre;
            body.innerText = item.description;
            ownerDiv.append(title, by, author, genre);
            div.append(dreamImg, ownerDiv);
            comment.innerText = 'Comments';
            likes.innerText = 'Likes';
            responseDiv.append(comment, likes);
            mainContainer.append(div, body, responseDiv);
            dreamContainer === null || dreamContainer === void 0 ? void 0 : dreamContainer.append(mainContainer);
        }
    }
});
//I have a question about how you'd declare item since it's an array
const viewEntry = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('list.json');
    const data = yield response.json();
    const ello = data.find((element) => element.title == item.title);
    console.log(ello);
    if (dreamContainer) {
        dreamContainer.innerText = '';
        const titleAuthorGenre = document.createElement('div');
        titleAuthorGenre.setAttribute('class', 'viewEntry--titleAuthorGenre');
        const title = document.createElement('a');
        title.setAttribute('id', 'viewEntry--title');
        const by = document.createElement('p');
        const author = document.createElement('a');
        author.setAttribute('id', 'viewEntry--author');
        const genre = document.createElement('a');
        genre.setAttribute('id', 'viewEntry--genre');
        const body = document.createElement('p');
        body.setAttribute('id', 'viewEntry--body');
        const returnBtn = document.createElement('button');
        returnBtn.setAttribute('class', 'viewEntry--returnBtn');
        author.addEventListener('click', () => { viewAuthor(item); });
        returnBtn.addEventListener('click', () => { LoadDreams(); });
        title.innerText = item.title;
        by.innerText = ' by ';
        author.innerText = item.author;
        genre.innerText = ' - ' + item.genre;
        body.innerText = item.body;
        returnBtn.innerText = 'return';
        titleAuthorGenre.append(title, by, author, genre);
        dreamContainer === null || dreamContainer === void 0 ? void 0 : dreamContainer.append(titleAuthorGenre, body, returnBtn);
    }
});
const viewAuthor = (item) => {
    console.log(item);
};
