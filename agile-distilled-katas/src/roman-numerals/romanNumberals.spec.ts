import {toRoman} from "./romanNumerals";

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
        expect(toRoman(9)).toEqual("IX");
    });
    it("returns X for 10", () => {
        expect(toRoman(10)).toEqual("X");
    });
    it("returns XL for 40", () => {
        expect(toRoman(40)).toEqual("XL");
    });
    it("returns L for 50", () => {
        expect(toRoman(50)).toEqual("L");
    });
    it("returns XC for 90", () => {
        expect(toRoman(90)).toEqual("XC");
    });
    it("returns C for 100", () => {
        expect(toRoman(100)).toEqual("C");
    });
    it("returns CD for 400", () => {
        expect(toRoman(400)).toEqual("CD");
    });
    it("returns D for 500", () => {
        expect(toRoman(500)).toEqual("D");
    });
    it("returns CM for 900", () => {
        expect(toRoman(900)).toEqual("CM");
    });
    it("returns M for 1000", () => {
        expect(toRoman(1000)).toEqual("M");
    });

    describe("acceptance", () => {
        it("846", () => {
            expect(toRoman(846)).toEqual("DCCCXLVI");
        });
        it("1999", () => {
            expect(toRoman(1999)).toEqual("MCMXCIX");
        });
        it("2008", () => {
            expect(toRoman(2008)).toEqual("MMVIII");
        });
    });
});
