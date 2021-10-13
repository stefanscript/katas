export function leapyear(number: number): boolean {
    if(number % 100 === 0 && number % 400 !== 0) {
        return false;
    }
    if (number % 4 === 0){
        return true;
    }
    return false;
}
