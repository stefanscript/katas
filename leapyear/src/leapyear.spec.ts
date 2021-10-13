import {isLeapYear} from "./isLeapYear";

describe("LeapYear", () => {
    it("4 is a typical leap year", () => {
        expect(isLeapYear(4)).toEqual(true);
    });
    it("8 is a typical leap year", () => {
        expect(isLeapYear(8)).toEqual(true);
    });
    it("1996 is a typical leap year", () => {
        expect(isLeapYear(1996)).toEqual(true);
    });
    it("9 is a common year", () => {
        expect(isLeapYear(9)).toEqual(false);
    });
    it("2001 is a common year", () => {
        expect(isLeapYear(2001)).toEqual(false);
    });

    it("1900 is an atypical common year", () => {
       expect(isLeapYear(1900)).toEqual(false);
    });

    it("1800 is an atypical common year", () => {
       expect(isLeapYear(1800)).toEqual(false);
    });

    it("2000 is an atypical leap year", () => {
       expect(isLeapYear(1800)).toEqual(false);
    });
});


