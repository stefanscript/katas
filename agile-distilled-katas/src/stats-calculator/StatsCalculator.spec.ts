import StatsCalculator from "./StatsCalculator";


describe("StatsCalculator", () => {
    const sequence = [6,9,15,-2,92,11];

    it("returns min value", () => {
        const result = new StatsCalculator(sequence);

        expect(result.min).toEqual(-2);
    });

    it("returns correct max value", () => {
        const result = new StatsCalculator(sequence);

        expect(result.max).toEqual(92);
    });

    it("returns correct count", () => {
        const result = new StatsCalculator(sequence);

        expect(result.count).toEqual(6);
    });

    it("returns correct avg", () => {
        const result = new StatsCalculator(sequence);

        expect(result.average).toBeCloseTo(21.833);
    });
});
