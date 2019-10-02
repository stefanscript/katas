function makeRover(obtacle) {
    const directions = ["N", "E", "S", "W"];
    const MAX_GRID = 10;
    let stopped = false;
    
    function obstacleAhead(obtacle, x, y) {
        return obtacle && x === obtacle[0] && y === obtacle[1];
    }
    
    function shouldMove(instruction) {
        return instruction === "M";
    }
    
    function moveForward(n) {
        return (n + 1) % MAX_GRID;
    }
    
    function moveBackwards(n) {
        return (n - 1 + MAX_GRID) % MAX_GRID;
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
            if (shouldMove(instruction)) {
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
                this.x = moveForward(this.x);
            } else if (this.direction === "W") {
                this.x = moveBackwards(this.x);
            } else if (this.direction === "S") {
                this.y = moveBackwards(this.y);
            } else {
                this.y = moveForward(this.y);
            }
        },
        rotate: function (instruction) {
            let index = directions.indexOf(this.direction);
            const directionsMax = directions.length;
            let newIndex = (instruction === "L" ? index - 1 + directionsMax : index + 1) % directionsMax;
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