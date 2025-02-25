export function getInput() : string {
    const inputElemnt = document.querySelector('.input-palindromo') as HTMLInputElement;

    if (inputElemnt) {
        let input: string = inputElemnt.value;
        return input;
        
    } else {
        return " "
    }
}