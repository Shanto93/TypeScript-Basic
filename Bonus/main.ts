import Methods from "./Module/module";

function Add(num1: number, num2: number, num3: number): number {
  return num1 + num2 + num3;
}

console.log(Methods.Add(4, 5));
console.log(Methods.Substract(4, 5));
console.log(Methods.Multiply(4, 5));
console.log(Methods.Divide(4, 5));
