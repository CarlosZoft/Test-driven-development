export abstract class Money {
  protected _currency: string;
  protected amount: number;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static euro(amount: number): Euro {
    return new Euro(amount, "EUR");
  }

  equals(otherMoney: Money): boolean {
    return this.amount === otherMoney.amount;
  }

  currency(): string {
    return this._currency;
  }
  abstract times(multiplier: number): Money;
}
export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier, this._currency);
  }
}

export class Euro extends Money {
  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier, this._currency);
  }
}
