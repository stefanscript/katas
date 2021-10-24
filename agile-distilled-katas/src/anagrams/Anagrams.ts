class Anagrams {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    getAll() {
        const anagrams = new Set();
        const letters = this.input.split("");

        if(letters.length === 1) {
            anagrams.add(letters[0])
        }

        if(letters.length === 2) {
            anagrams.add(`${letters[0]}${letters[1]}`);
            anagrams.add(`${letters[1]}${letters[0]}`);
        }

        if(letters.length === 3) {
            anagrams.add(`${letters[0]}${letters[1]}${letters[2]}`);
            anagrams.add(`${letters[0]}${letters[2]}${letters[1]}`);
            anagrams.add(`${letters[1]}${letters[0]}${letters[2]}`);
            anagrams.add(`${letters[1]}${letters[2]}${letters[0]}`);
            anagrams.add(`${letters[2]}${letters[1]}${letters[0]}`);
            anagrams.add(`${letters[2]}${letters[0]}${letters[1]}`);
        }

        return Array.from(anagrams);
    }
}

export default Anagrams;
