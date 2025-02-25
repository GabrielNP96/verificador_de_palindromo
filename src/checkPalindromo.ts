export function checkPalindromo(str : string) : string {
    const strFormatted: string = str.replace(/[\s\p{P}]+/gu, "");
    const wordStr: string = strFormatted.split("").reverse().join("");

    if(strFormatted.length < 2) {
        return 'Você precisa escrever ao menos um caractere';
    }
    
    if (strFormatted === wordStr) {
        return `${str} é um palíndromo`;
    } else {
        return `${str} não é um palindromo`
    }
}