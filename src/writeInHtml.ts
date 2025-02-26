export function writeInHtml(str: string): void {
    const answerHtml = document.querySelector('.answer') as HTMLElement;

    if(answerHtml) {
        answerHtml.innerHTML = str;
    } else {
        console.error("Elemento '.answer' não encontrado!");
    }
}