describe("Mars Rover", () => {
    let rover;
    beforeEach(() => {
        rover = makeRover();
    });
    
    it("it moves", () => {
        expect(rover.execute("M")).toEqual("0:1:N");
    });
    
    it("it moves 2 spaces", () => {
        expect(rover.execute("MM")).toEqual("0:2:N");
    });
    
    it("it wraps around", () => {
        expect(rover.execute("M".repeat(10))).toEqual("0:0:N");
    });
    
    it("it can turn right", () => {
        expect(rover.execute("R")).toEqual("0:0:E");
    });
    
    it("it can turn right twice", () => {
        expect(rover.execute("RR")).toEqual("0:0:S");
    });
});

function makeRover() {
    const directions = ["N", "E", "S", "W"];
    return {
        x: 0,
        y: 0,
        direction: "N",
        execute(input) {
            input.split("").forEach((instruction) => this.move(instruction));
            return this.finalPos();
        },
        move(instruction) {
            if (instruction === "M") {
                this.y = (this.y + 1) % 10;
            }
            if (instruction === "R") {
                const currentIndex = (directions.indexOf(this.direction) + 1) % 4;
                this.direction = directions[currentIndex];
            }
        },
        finalPos: function () {
            return `${this.x}:${this.y}:${this.direction}`;
        },
    };
}

