// // const arrayNumbers = [1,2,3,4,5];
// // const arrayString = arrayNumbers.map((numbers) => numbers.toString());
// // console.log(arrayString);

// type Volume = {
//   height: number;
//   width: number;
//   depth: number;
// };

// type Change<T> = {
//   readonly [key in keyof T]: T[key];   //Can't change value if we use readonly keyword
// };

// const area1: Change<Volume> = { height: 1, width: 2, depth: 3 };
// console.log(area1);

// // area1.depth = 10;    //It is showing error as we used readonly keyword so we can't change the value