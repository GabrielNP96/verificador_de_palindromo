"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeInHtml = writeInHtml;
function writeInHtml(str) {
    const answerHtml = document.querySelector('.answer');
    if (answerHtml) {
        answerHtml.innerHTML = str;
    }
    else {
        console.error("Elemento '.answer' não encontrado!");
    }
}
