import {leapyear} from "./leapyear";

describe("LeapYear", () => {
    it("4 is a typical leap year", () => {
        expect(leapyear(4)).toEqual(true);
    });
    it("8 is a typical leap year", () => {
        expect(leapyear(8)).toEqual(true);
    });
    it("1996 is a typical leap year", () => {
        expect(leapyear(1996)).toEqual(true);
    });
    it("9 is a common year", () => {
        expect(leapyear(9)).toEqual(false);
    });
    it("2001 is a common year", () => {
        expect(leapyear(2001)).toEqual(false);
    });

    it("1900 is an atypical common year", () => {
       expect(leapyear(1900)).toEqual(false);
    });

    it("1800 is an atypical common year", () => {
       expect(leapyear(1800)).toEqual(false);
    });
});


