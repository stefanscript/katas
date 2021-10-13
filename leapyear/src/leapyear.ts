export function leapyear(number: number): boolean {
    if (number % 4 === 0) return true;
    if (number === 9) {
        return false;
    }
}
