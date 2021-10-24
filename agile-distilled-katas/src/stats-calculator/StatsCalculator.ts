class StatsCalculator {
    sequence: number[];

    constructor(sequence: number[]) {
        this.sequence = sequence;
    }

    get min():number {
        return Math.min(...this.sequence);
    }

    get max(): number {
        return Math.max(...this.sequence);
    }

    get count(): number {
        return this.sequence.length;
    }

    get average(): number {
        return this.sequence.reduce((acc, n) => acc += n, 0) / this.count;
    }
}

export default StatsCalculator;
