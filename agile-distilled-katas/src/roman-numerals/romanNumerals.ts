const numbersToRomanMap: Record<string, number> = {
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
};

export function toRoman(number: number) {
    let roman = "";
    let remainder = number;

    for (const r in numbersToRomanMap) {
        while (remainder >= numbersToRomanMap[r]) {
            roman += r;
            remainder -= numbersToRomanMap[r];
        }
    }
    return roman;
}
