export function isLeapYear(number: number): boolean {
    return isTypicalLeapYear(number) && !isAtypicalCommonYear(number);
}

function isTypicalLeapYear(number: number) {
    return number % 4 === 0;
}

function isAtypicalCommonYear(number: number) {
    return number % 100 === 0 && number % 400 !== 0;
}

