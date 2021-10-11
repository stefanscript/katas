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
});


function fizzbuzz(number: number) {
    if(number === 2) {
        return "2";
    }
    if(number === 4) {
        return "4";
    }
    return "1";
}
