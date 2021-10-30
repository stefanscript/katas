function toRoman(number: number) {
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
});
