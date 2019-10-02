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
    
    let x = 0;
    let y = 0;
    let prevX = 0;
    let prevY = 0;
    
    return {
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
            if(obstacleAhead(obtacle, x, y)) {
                stopped = true;
                return;
            }
            
            prevX = x;
            prevY = y;
            
            if (this.direction === "E") {
                x = moveForward(x);
            } else if (this.direction === "W") {
                x = moveBackwards(x);
            } else if (this.direction === "S") {
                y = moveBackwards(y);
            } else {
                y = moveForward(y);
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
                return `o:${prevX}:${prevY}:${this.direction}`;
            }
            return `${x}:${y}:${this.direction}`;
        },
    };
}

export default makeRover;