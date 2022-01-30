import { Bank } from "./Bank";
import { Expression } from "./expression";
import { Sum } from "./Sum";

export class Money implements Expression {
  private readonly _currency: string;
  private readonly _amount: number;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static euro(amount: number): Money {
    return new Money(amount, "EUR");
  }

  equals(otherMoney: Money): boolean {
    return (
      this._amount === otherMoney._amount &&
      this._currency === otherMoney._currency
    );
  }

  currency(): string {
    return this._currency;
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this._currency, to);
    return new Money(this._amount / rate, to);
  }

  times(multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency);
  }

  amount(): number {
    return this._amount;
  }
}
