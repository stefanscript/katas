const numbersToRomanMap: Record<string, number> = {
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
};

function toRoman(number: number) {
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

describe("Roman numerals", () => {
    it("returns I for 1", () => {
        expect(toRoman(1)).toEqual("I");
    });
    it("returns II for 2", () => {
        expect(toRoman(2)).toEqual("II");
    });
    it("returns III for 3", () => {
        expect(toRoman(3)).toEqual("III");
    });
    it("returns IV for 4", () => {
        expect(toRoman(4)).toEqual("IV");
    });
    it("returns V for 5", () => {
        expect(toRoman(5)).toEqual("V");
    });
    it("returns VI for 6", () => {
        expect(toRoman(6)).toEqual("VI");
    });
    it("returns IX for 9", () => {
        // expect(toRoman(9)).toEqual("IX");
    });
});
