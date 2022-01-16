import { Dollar } from "./Dollar";
describe("Dollar tests", () => {
  it("Should return 10 when five dollars are multiplied by two", () => {
    const five: Dollar = new Dollar(5);
    var product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  it("should return true when $5 is compared to %5", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
