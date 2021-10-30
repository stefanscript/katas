function toRoman(number: number) {
    if(number === 5) {
        return "V";
    }
    if(number === 4) {
        return "IV";
    }
    return "I".repeat(number);
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
});
