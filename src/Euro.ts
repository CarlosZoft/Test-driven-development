import { Money } from "./Money";
export class Euro extends Money {
  
  constructor(amount: number) {
    super(amount)
  }

  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier);
  }
}
