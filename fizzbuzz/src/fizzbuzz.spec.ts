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
    });
});


function fizzbuzz(number: number) {
    if(number % 3 === 0) {
        return "fizz";
    }
    if(number === 5) {
        return "buzz";
    }
    return String(number);
}
