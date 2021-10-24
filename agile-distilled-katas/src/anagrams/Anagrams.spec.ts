import Anagrams from "./Anagrams";


describe("Anagrams", () => {
    it("should deal with empty string", () => {
        const result = new Anagrams("");

        expect(result.getAll()).toEqual([])
    });

    it("should return one anagram for 'a' input", () => {
        const result = new Anagrams("a");

        expect(result.getAll()).toEqual(["a"])
    });

    it("should return one anagram for 'b' input", () => {
        const result = new Anagrams("b");

        expect(result.getAll()).toEqual(["b"])
    });

    it("should return one anagram for 'c' input", () => {
        const result = new Anagrams("c");

        expect(result.getAll()).toEqual(["c"])
    });

    it("should return one anagrams for 'aa' input", () => {
        const result = new Anagrams("aa");

        expect(result.getAll()).toEqual(["aa"])
    });

    it("should return two anagrams for 'ab' input", () => {
        const result = new Anagrams("ab");

        expect(result.getAll()).toEqual(["ab", "ba"])
    });

    it("should return three anagrams for 'zbb' input", () => {
        const result = new Anagrams("zbb");

        expect(result.getAll()).toEqual(["zbb", "bzb", "bbz"])
    });

    it("should return 6 anagrams for 'abc' input", () => {
        const result = new Anagrams("abc");

        expect(result.getAll()).toEqual(["abc", "acb", "bac", "bca", "cba", "cab"])
    });
});
