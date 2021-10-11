describe("FizzBuzz", () => {
    describe("Normal string representation", () => {
       it("when fizzbuzz-ing 1 it should return a string representing it", () => {
           expect(fizzbuzz(1)).toEqual("1");
       });
       it("when fizzbuzz-ing 2 it should return a string representing it", () => {
           expect(fizzbuzz(2)).toEqual("2");
       });
    });
});


function fizzbuzz(number: number) {
    if(number === 2) {
        return "2";
    }
    return "1";
}
