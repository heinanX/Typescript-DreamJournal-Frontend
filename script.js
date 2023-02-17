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
const profileInfo = document.querySelector('.profileInfo');
const dreamjournals = () => __awaiter(void 0, void 0, void 0, function* () {
    if (profileInfo) {
        profileInfo.innerHTML = '';
        const response = yield fetch("./list.json");
        const data = yield response.json();
        console.log(data);
        const lookUpDreamDiv = document.createElement('div');
        lookUpDreamDiv.setAttribute('id', 'lookUpDreamDiv');
        const lookUpDreamInput = document.createElement('input');
        lookUpDreamInput.setAttribute('id', 'lookUpDreamInput');
        const lookUpDreamButton = document.createElement('button');
        lookUpDreamButton.setAttribute('id', 'lookUpDreamButton');
        const lookUpDreamSubmit = document.createElement('button');
        lookUpDreamSubmit.setAttribute('id', 'lookUpDreamSubmit');
        lookUpDreamButton.innerText = 'title';
        lookUpDreamSubmit.innerText = 'Search';
        lookUpDreamDiv.append(lookUpDreamInput, lookUpDreamButton, lookUpDreamSubmit);
        profileInfo.append(lookUpDreamDiv);
        // profileInfo.style.display = 'none'
        console.log('hello');
    }
});
