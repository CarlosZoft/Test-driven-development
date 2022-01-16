import { Dollar } from "./Dollar";
describe("Dollar tests", () => {
  it("Should return 10 when five dollars are multiplied by two", () => {
    const five: Dollar = new Dollar(5);
    var product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});
