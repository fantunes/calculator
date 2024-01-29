export type Operator =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division";

export const calc = (value1: number, value2: number, operation: Operator) => {
  switch (operation) {
    case "addition":
      return value1 + value2;
    case "subtraction":
      return value1 - value2;
    case "multiplication":
      return value1 * value2;
    case "division":
      return value1 / value2;

    default:
      return value1;
  }
};
