import { getInput } from "./getInput.js";
import { checkPalindromo } from "./checkPalindromo.js";
import { writeInHtml } from "./writeInHtml.js";

const btn = document.querySelector('button');
btn?.addEventListener('click', (event) => {
    event.preventDefault();

    let input: string = getInput();
    let isPalindrome: string = checkPalindromo(input);
    writeInHtml(isPalindrome);
})





