export function getInput() {
    const inputElemnt = document.querySelector('.input-palindromo');
    if (inputElemnt) {
        let input = inputElemnt.value;
        return input;
    }
    else {
        return " ";
    }
}
