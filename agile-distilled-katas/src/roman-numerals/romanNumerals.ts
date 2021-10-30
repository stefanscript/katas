const numbersToRomanMap: Record<string, number> = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
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
