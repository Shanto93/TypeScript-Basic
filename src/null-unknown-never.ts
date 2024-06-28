//Null
const searching = (value: string | null) => {
  if (value === null) {
    //console.log("Nothing to search");
  } else {
    //onsole.log("Searching");
  }
};

searching("Shanto");
searching(null);

//Unknown
const convert = (value: unknown) => {
  if (typeof value === "number") {
    const converted = (value * 1000) / 3600;
    // console.log(`Speed is ${converted} m^h`);
  } else if (typeof value === "string") {
    const [num, unit] = value.split(" ");
    const converted = (parseFloat(value) * 1000) / 3600;
    // console.log(`Speed is ${converted} m^h`);
  } else {
    // console.log("There is wrong type");
  }
};
convert(10);
convert("10 km^h");

//Never
// function throwError(message: string): never {
//   throw new Error(message);
// }
// throwError("Error has been occured");

//Nullish Coeslancing Operator
const age: number = 17;
age > 18 ? console.log("no") : console.log("yes");
age > 18 ?? console.log("guest");   //It only works on null and undefined 