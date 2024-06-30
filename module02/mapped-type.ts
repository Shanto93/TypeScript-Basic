// const arrayNumbers = [1,2,3,4,5];
// const arrayString = arrayNumbers.map((numbers) => numbers.toString());
// console.log(arrayString);

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Change<T> = {
  [key in keyof T]: T[key];
};

const area1: Change<Volume> = { height: 1, width: 2, depth: 3 };
console.log(area1);
