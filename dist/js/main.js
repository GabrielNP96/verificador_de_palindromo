"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getInput_js_1 = require("./getInput.js");
const btn = document.querySelector('button');
btn?.addEventListener('click', (event) => {
    event.preventDefault();
    let input = (0, getInput_js_1.getInput)();
});
