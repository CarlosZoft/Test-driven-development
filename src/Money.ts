export abstract class Money {
  protected readonly amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static euro(amount: number): Euro {
    return new Euro(amount);
  }

  equals(otherMoney: Money): boolean {
    return this.amount === otherMoney.amount;
  }

  abstract times(multiplier: number): Money;
}
export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

export class Euro extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier);
  }
}
