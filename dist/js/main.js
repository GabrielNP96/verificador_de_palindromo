"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getInput_js_1 = require("./getInput.js");
const checkPalindromo_js_1 = require("./checkPalindromo.js");
const writeInHtml_js_1 = require("./writeInHtml.js");
const btn = document.querySelector('button');
btn?.addEventListener('click', (event) => {
    event.preventDefault();
    let input = (0, getInput_js_1.getInput)();
    let isPalindrome = (0, checkPalindromo_js_1.checkPalindromo)(input);
    (0, writeInHtml_js_1.writeInHtml)(isPalindrome);
});
