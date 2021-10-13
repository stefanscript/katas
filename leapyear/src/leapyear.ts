export function leapyear(number: number): boolean {
    if(number === 1900) {
        return false;
    }
    if(number === 1800) {
        return false;
    }
    if (number % 4 === 0){
        return true;
    }
    return false;
}
