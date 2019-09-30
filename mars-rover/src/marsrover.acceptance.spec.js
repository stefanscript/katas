import makeRover from "./marsrover";

describe("Mars Rover Acceptance", () => {
    let rover;
    beforeEach(() => {
        rover = makeRover();
    });
    
    it("it moves", () => {
        expect(rover.execute("MMRMMLM")).toEqual("2:3:N");
    });
    
    it("it wraps around", () => {
        expect(rover.execute("MMMMMMMMMM")).toEqual("0:0:N");
    });
});