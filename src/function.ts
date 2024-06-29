// // Normal function
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// add(2, 3);

// //Arrow function
// const addArrow = (n1: number, n2: number): number => n1 + n2;

// let arr = [4, 5, 6];
// const newArray = arr.map((num) => num * num);

// //Default Parameter
// function add03(num1: number, num2: number = 10): number {
//   return num1 + num2;
// }
// add03(3); //We can not use single default parameter for the first parameter.

// //Default Parameter
// function add04(num1: number = 20, num2: number = 10): number {
//   //If we do not pass any value then the default value will be use but if we passes any value then the passes value will be use.
//   return num1 + num2;
// }
// add04(3, 4);


// //Spread operator
// const friends = ["Rabbi", "Habiba", "Sanjida"];
// const newFriends = ["Titon", "Mosharaf", "bla bla"];
// friends.push(...newFriends);
// // console.log(friends);

// //rest parameter
// const greeting = (...friends: string[]): void => {
//     friends.forEach((friend) => console.log(`Hi ${friend}`));
// }
// greeting('shanto', 'sanjida', 'rabbi', 'habiba');
