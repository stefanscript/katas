function makeRover(obtacle) {
    const directions = ["N", "E", "S", "W"];
    let stopped = false;
    
    function obstacleAhead(obtacle, x, y) {
        return obtacle && x === obtacle[0] && y === obtacle[1];
    }
    
    return {
        x: 0,
        y: 0,
        px: 0,
        py: 0,
        direction: "N",
        execute(input) {
            input.split("").forEach((instruction) => this.action(instruction));
            return this.finalPosition();
        },
        action(instruction) {
            if (instruction === "M") {
                this.move();
                return;
            }
            this.rotate(instruction);
        },
        move() {
            if(obstacleAhead(obtacle, this.x, this.y)) {
                stopped = true;
                return;
            }
            this.px = this.x;
            this.py = this.y;
            if (this.direction === "E") {
                this.x = (this.x + 1) % 10;
            } else if (this.direction === "W") {
                this.x = this.x === 0 ? 9 : this.x - 1;
            } else if (this.direction === "S") {
                this.y = this.y === 0 ? 9 : this.y - 1;
            } else {
                this.y = (this.y + 1) % 10;
            }
        },
        rotate: function (instruction) {
            let index = directions.indexOf(this.direction);
            let newIndex = (instruction === "L" ? index - 1 + 4 : index + 1) % 4;
            this.direction = directions[newIndex];
        },
        finalPosition: function () {
            if(stopped) {
                return `o:${this.px}:${this.py}:${this.direction}`;
            }
            return `${this.x}:${this.y}:${this.direction}`;
        },
    };
}

export default makeRover;