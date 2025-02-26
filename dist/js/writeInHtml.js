export function writeInHtml(str) {
    const answerHtml = document.querySelector('.answer');
    if (answerHtml) {
        answerHtml.innerHTML = str;
    }
    else {
        console.error("Elemento '.answer' não encontrado!");
    }
}
