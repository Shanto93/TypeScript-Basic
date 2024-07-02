// // //Keyof Guard

// // type Alphanumeric = number | string;
// // function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
// //   if (param1 == "number" && param2 == "number") {
// //     return param1 + param2;
// //   } else {
// //     return param1.toString() + param2.toString();
// //   }
// // }

// // console.log(add("1", "2"));
// // console.log(add(3, 4));

// //in guard

// type NormalUser = {
//   name: string;
// };

// type AdminUser = {
//   name: string;
//   role: `admin`;
// };

// const getUser = (user: NormalUser | AdminUser) => {
//   if ("role" in user) {
//     return `This is admin user`;
//   } else {
//     return `This is normal user`;
//   }
// };

// const normal1: NormalUser = { name: "Shanta Islam" };
// const admin1: AdminUser = { name: "Sanjida Tanjir", role: "admin" };

// console.log(getUser(normal1));
// console.log(getUser(admin1));

// // instanceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`Making sound`);
  }
}
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`Barking dog`);
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log(`Meawing Cat`);
  }
}

function checkDog(obj: Animal): obj is Dog {
  return obj instanceof Dog;
}
function checkCat(obj: Animal): obj is Cat {
  return obj instanceof Cat;
}

function getAnimal(animal: Animal) {
  if (checkDog(animal)) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    console.log(`Other animal`);
  }
}
// function getAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMeaw();
//   } else {
//     console.log(`Other animal`);
//   }
// }

const animal1 = new Animal("German Shephard", "dog");
const animal2 = new Dog("Italian Dog", "Dog");
const animal3 = new Cat("Bangladeshi Cat", "Cat");

getAnimal(animal1);
getAnimal(animal2);
getAnimal(animal3);
