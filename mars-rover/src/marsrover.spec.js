describe("Mars Rover", () => {
    it("it moves", () => {
        const rover = {
            x: 0,
            y: 0,
            direction: "N",
            execute(input) {
                this.move();
                return this.finalPos();
            },
            move() {
                this.y += 1;
            },
            finalPos: function () {
                return `${this.x}:${this.y}:${this.direction}`;
            },
        };
        expect(rover.execute("M")).toEqual("0:1:N");
    })
});