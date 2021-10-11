import {fizzbuzz} from "./fizzbuzz";

describe("FizzBuzz", () => {
    describe("Normal cases", () => {
       it("when fizzbuzz-ing 1 it should return a string representing it", () => {
           expect(fizzbuzz(1)).toEqual("1");
       });
       it("when fizzbuzz-ing 2 it should return a string representing it", () => {
           expect(fizzbuzz(2)).toEqual("2");
       });
       it("when fizzbuzz-ing 4 it should return a string representing it", () => {
           expect(fizzbuzz(4)).toEqual("4");
       });
    });

    describe("Fizz cases", () => {
      it("when fizzbuzz 3 it should return fizz", () => {
          expect(fizzbuzz(3)).toEqual("fizz");
      });
      it("when fizzbuzz 6 it should return fizz", () => {
          expect(fizzbuzz(6)).toEqual("fizz");
      });
    });

    describe("buzz cases", () => {
      it("when fizzbuzz 5 it should return buzz", () => {
          expect(fizzbuzz(5)).toEqual("buzz");
      });
      it("when fizzbuzz 10 it should return buzz", () => {
          expect(fizzbuzz(10)).toEqual("buzz");
      });
    });

    describe("fizzbuzz cases", () => {
      it("when fizzbuzz 15 it should return fizzbuzz", () => {
          expect(fizzbuzz(15)).toEqual("fizzbuzz");
      });
      it("when fizzbuzz 30 it should return fizzbuzz", () => {
          expect(fizzbuzz(30)).toEqual("fizzbuzz");
      });
    });
});


