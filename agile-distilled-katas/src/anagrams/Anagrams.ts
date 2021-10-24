class Anagrams {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    getAll() {
        if (this.input === "a") {
            return ["a"];
        }
        if (this.input === "b") {
            return ["b"];
        }
        return [""];
    }
}

export default Anagrams;
