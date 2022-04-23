import { Money } from "./Money";
import { Expression } from "./expression";
import { Bank } from "./Bank";
import { Sum } from "./Sum";

describe("Money", () => {
  it("Should handle dollar multiplication", () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
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
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, "USD");
    expect(reduced.equals(Money.dollar(10))).toBeTruthy();
  });

  it("Should return a sum when plus is used", () => {
    const five = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum = result as Sum;
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it("should reduce from a sum", () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  });

  it("should reduce from a money", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result).toEqual(Money.dollar(1));
  });

  it("should reduce from a different currencies", () => {
    const bank = new Bank();
    bank.addRate("EUR", "USD", 2);
    const result = bank.reduce(Money.euro(2), "USD");
    expect(result).toEqual(Money.dollar(1));
  });

  it("should handle identity rate", () => {
    expect(new Bank().rate("USD", "USD")).toEqual(1);
  });

  it("Should handle mixed addition", () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenEuros: Expression = Money.euro(10);
    const bank = new Bank();
    bank.addRate("EUR", "USD", 2);
    const result: Expression = bank.reduce(fiveBucks.plus(tenEuros), "USD");
    expect(result).toEqual(Money.dollar(10));
  });
});
