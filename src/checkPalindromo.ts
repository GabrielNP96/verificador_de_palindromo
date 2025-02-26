export function checkPalindromo(str : string) : string {
    const strFormatted: string = str.replace(/[\s\p{P}]+/gu, "");
    const wordStr: string = strFormatted.split("").reverse().join("");

    if(strFormatted.length < 2) {
        return '<p class = "not-palindrome" >>Você precisa escrever ao menos um caractere</p>';
    }
    
    if (strFormatted === wordStr) {
        return `<p class= "palindrome">${str} é um palíndromo</p>`;
    } else {
        return `<p class = "not-palindrome">${str} não é um palíndromo</p>`;
    }
}