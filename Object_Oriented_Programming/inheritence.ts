// class Student {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   makeSleep(hours: number): string {
//     return `${this.name} student is sleeping for ${hours} hours`;
//   }
// }

// class Teacher extends Student {
//   designation: string;
//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }
//   takeClass(hours: number): string {
//     return `${this.name} teacher is taking class for ${hours} hours`;
//   }
// }

// const stud = new Student("Shanto Islam", 25, "Dhaka");
// const teach = new Teacher(
//   "Abu Nowshed Chy",
//   35,
//   "Chittagong",
//   "Assistant Professor"
// );

// console.log(stud.makeSleep(9));
// console.log(teach.makeSleep(9));
// console.log(teach.takeClass(6));