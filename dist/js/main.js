import { getInput } from "./getInput.js";
import { checkPalindromo } from "./checkPalindromo.js";
import { writeInHtml } from "./writeInHtml.js";
const btn = document.querySelector('button');
btn?.addEventListener('click', (event) => {
    event.preventDefault();
    let input = getInput();
    let isPalindrome = checkPalindromo(input);
    writeInHtml(isPalindrome);
});
