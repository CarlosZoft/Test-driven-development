import { Bank } from "./Bank";
import { Money } from "./Money";

export interface Expression {
  reduce: (bank: Bank, to: string) => Money;
  plus: (addend: Expression) => Expression;
  times: (multiplier: number) => Expression;
}
