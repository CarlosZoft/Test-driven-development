import { Dollar } from "./Dollar";
import { Euro } from "./Euro";

describe("Money", () => {
  it("Should correctly handle dollar multiplication", () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });

  it("Should correctly handle euro multiplication", () => {
    const five: Euro = new Euro(5);
    expect(five.times(2).equals(new Euro(10))).toBeTruthy();
    expect(five.times(3).equals(new Euro(15))).toBeTruthy();
  });

  it("Should correctly handle money equality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Euro(5).equals(new Euro(5))).toBeTruthy();
    expect(new Euro(5).equals(new Euro(6))).toBeFalsy();
    expect(new Euro(5).equals(new Dollar(6))).toBeFalsy();
  });
});
