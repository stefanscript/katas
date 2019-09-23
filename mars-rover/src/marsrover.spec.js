describe("Mars Rover", () => {
    it("it moves", () => {
        const rover = makeRover();
        
        expect(rover.execute("M")).toEqual("0:1:N");
    });
    
    it("it moves 2 spaces", () => {
        const rover = makeRover();
        
        expect(rover.execute("MM")).toEqual("0:2:N");
    });
});

function makeRover() {
    return {
        x: 0,
        y: 0,
        direction: "N",
        execute(input) {
            input.split("").forEach(() => this.move());
            return this.finalPos();
        },
        move() {
            this.y += 1;
        },
        finalPos: function () {
            return `${this.x}:${this.y}:${this.direction}`;
        },
    };
}

