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
    
    it("it can turn right three times", () => {
        expect(rover.execute("RRR")).toEqual("0:0:W");
    });
    
    it("it can turn right 4 times", () => {
        expect(rover.execute("RRRR")).toEqual("0:0:N");
    });
    
    it("it can turn left", () => {
        expect(rover.execute("L")).toEqual("0:0:W");
    });
    
    it("it can turn left twice", () => {
        expect(rover.execute("LL")).toEqual("0:0:S");
    });
    
    it("it can turn left three times", () => {
        expect(rover.execute("LLL")).toEqual("0:0:E");
    });
    
    it("it can turn left 4 times", () => {
        expect(rover.execute("LLLL")).toEqual("0:0:N");
    });
    
    it("it can turn left and right", () => {
        expect(rover.execute("LR")).toEqual("0:0:N");
    });
    
    it("it can action and turn", () => {
        expect(rover.execute("MMR")).toEqual("0:2:E");
    });
    
    it("it can action and turn and action and turn", () => {
        expect(rover.execute("MMRMMLM")).toEqual("2:3:N");
    });
    
    it("it can do complex turns and movements", () => {
        expect(rover.execute("RMMMLMMMMMLLMRM")).toEqual("2:4:W");
    });
});

function makeRover() {
    const directions = {
        "R": ["N", "E", "S", "W"],
        "L": ["N", "W", "S", "E"]
    };
    return {
        x: 0,
        y: 0,
        direction: "N",
        execute(input) {
            input.split("").forEach((instruction) => this.action(instruction));
            return this.finalPosition();
        },
        action(instruction) {
            if (instruction === "M") {
                this.move(instruction);
                return;
            }
            this.rotate(instruction);
        },
        move() {
            if (this.direction === "E") {
                this.x = (this.x + 1) % 10;
            } else if (this.direction === "W") {
                this.x = (this.x - 1) % 10;
            } else if (this.direction === "S") {
                this.y = (this.y - 1) % 10;
            } else {
                this.y = (this.y + 1) % 10;
            }
        },
        rotate: function (instruction) {
            const index = (directions[instruction].indexOf(this.direction) + 1) % 4;
            this.direction = directions[instruction][index];
        },
        finalPosition: function () {
            return `${this.x}:${this.y}:${this.direction}`;
        },
    };
}

