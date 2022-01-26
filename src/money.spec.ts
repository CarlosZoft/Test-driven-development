import { Money } from "./Money";
import { Expression } from './expression'
import { Bank } from "./Bank";

describe("Money", () => {
  it("Should handle dollar multiplication", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
  });

  it("Should handle money equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.euro(5).equals(Money.dollar(6))).toBeFalsy();
  });

  it("Should handle currencies", () => {
    expect(Money.dollar(1).currency()).toEqual("USD");
    expect(Money.euro(1).currency()).toEqual("EUR");
  });

  it("Should handle simple addition", () => {
    const five: Money = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD')
    expect(reduced.equals(Money.dollar(10))).toBeTruthy()
  })
});
