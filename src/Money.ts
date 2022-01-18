export class Money {
  protected readonly amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  equals(otherMoney: Money): boolean {
    return this.amount === otherMoney.amount;
  }
}