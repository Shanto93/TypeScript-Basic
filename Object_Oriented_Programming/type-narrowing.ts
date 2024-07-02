
//Keyof Guard
function add(
  param1: number | string,
  param2: number | string
): number | string {
  if (param1 == "number" && param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add("1", "2"));
console.log(add(3, 4));