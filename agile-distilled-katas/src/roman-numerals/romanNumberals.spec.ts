function toRoman(number: number) {
    return "I";
}

describe("Roman numerals", () => {
    it("returns I form 1", () => {
        expect(toRoman(1)).toEqual("I");
    });
});
