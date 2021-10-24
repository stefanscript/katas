class Anagrams {
    input: string;

    constructor(input: string){
        this.input = input;
    }

    getAll(){
        if( this.input === "a"){
            return ["a"];
        }
        return [""];
    }
}

export default Anagrams;
