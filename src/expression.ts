import { Money } from "./Money";

export interface Expression {
  reduce: (to: string) => Money;
}
