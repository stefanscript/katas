import makeRover from "./marsrover";

describe("Mars Rover Acceptance", () => {
    let rover;
    beforeEach(() => {
        rover = makeRover();
    });
    
    it("it moves", () => {
        expect(rover.execute("MMRMMLM")).toEqual("2:3:N");
    });
});