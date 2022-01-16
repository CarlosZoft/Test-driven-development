import { Dollar } from "./Dollar";
describe("Dollar tests", () => {
  it("Should return 10 when five dollars are multiplied by two/three", () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBe(true);
    expect(five.times(3).equals(new Dollar(15))).toBe(true);
  });

  it("should return true when $5 is compared to %5", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
