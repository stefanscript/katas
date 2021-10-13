export function leapyear(number: number): boolean {
    if (number % 4 === 0){
        return true;
    }
    return false;
}
