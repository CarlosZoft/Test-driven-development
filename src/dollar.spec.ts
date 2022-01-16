import { Dollar } from "./Dollar";
describe("Dollar tests", () => {
  it("Should return 10 when five dollars are multiplied by two", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
