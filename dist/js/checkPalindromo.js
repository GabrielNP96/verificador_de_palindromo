"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPalindromo = checkPalindromo;
function checkPalindromo(str) {
    const strFormatted = str.replace(/[\s\p{P}]+/gu, "");
    const wordStr = strFormatted.split("").reverse().join("");
    if (strFormatted === wordStr) {
    }
}
