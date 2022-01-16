export class Dollar {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  times(multipliers: number): void {
    this.amount *= multipliers;
  }
}
