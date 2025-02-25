export function checkPalindromo(str : string) : string {
    const strFormatted: string = str.replace(/[\s\p{P}]+/gu, "");
    const wordStr: string = strFormatted.split("").reverse().join("");

    if (strFormatted === wordStr) {
        
    }
}