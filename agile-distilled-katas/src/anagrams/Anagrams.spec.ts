import Anagrams from "./Anagrams";


describe("Anagrams", () => {
    it("should deal with empty string", () => {
        const result = new Anagrams("");

        expect(result.getAll()).toEqual([""])
    });

    it("should return one anagram for 'a' input", () => {
        const result = new Anagrams("a");

        expect(result.getAll()).toEqual(["a"])
    });

    it("should return one anagram for 'b' input", () => {
        const result = new Anagrams("b");

        expect(result.getAll()).toEqual(["b"])
    });
});
