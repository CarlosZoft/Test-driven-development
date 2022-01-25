export class Money {
  protected _currency: string;
  protected amount: number;

  constructor(amount: number, currency: string) {
    this.amount = amount;
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
      this.amount === otherMoney.amount &&
      this._currency === otherMoney._currency
    );
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }
}
