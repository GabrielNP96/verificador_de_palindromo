import { getInput } from "./getInput.js";

const btn = document.querySelector('button');
btn?.addEventListener('click', (event) => {
    event.preventDefault();

    let input: string = getInput();
})





