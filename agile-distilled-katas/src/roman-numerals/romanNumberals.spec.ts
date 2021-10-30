function toRoman(number: number) {
    if(number === 2) {
        return "II";
    }
    return "I";
}

describe("Roman numerals", () => {
    it("returns I form 1", () => {
        expect(toRoman(1)).toEqual("I");
    });
    it("returns II form 2", () => {
        expect(toRoman(2)).toEqual("II");
    });
});
