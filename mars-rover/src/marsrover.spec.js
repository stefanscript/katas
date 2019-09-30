import makeRover from "./marsrover";

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
    
    it("it can move come up the other side W", () => {
        expect(rover.execute("MLM")).toEqual("9:1:W");
    });
    
    it("it can move come up the other side S", () => {
        expect(rover.execute("RRM")).toEqual("0:9:S");
    });
    
    it("it can move come up the other side E", () => {
        expect(rover.execute("LM")).toEqual("9:0:W");
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
    
    it("it can move and turn and move and turn", () => {
        expect(rover.execute("MMRMMLM")).toEqual("2:3:N");
    });
    
    it("it can do complex turns and movements", () => {
        expect(rover.execute("RMMMLMMMMMLLMRM")).toEqual("2:4:W");
    });
});

