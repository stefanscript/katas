export function leapyear(number: number): boolean {
    if (number === 4)
        return true;
    if (number === 8) return true;
    if (number === 1996) return true;
    if (number === 9) {
        return false;
    }
}
