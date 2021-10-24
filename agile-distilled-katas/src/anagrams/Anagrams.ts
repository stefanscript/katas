class Anagrams {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    getAll() {
        return this.input.split("");
    }
}

export default Anagrams;
