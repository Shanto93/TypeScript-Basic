// //Abstraction using Interface

// interface IVehicle {
//   startEngine(): void;
//   endEngine(): void;
//   test(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public speed: number,
//     public model: number
//   ) {}

//   startEngine(): void {
//     console.log("Starting Engine");
//   }
//   endEngine(): void {
//     console.log("End Engine");
//   }
//   test(): void {
//     console.log("Test Engine");
//   }
//   extraTest(): void {
//     console.log("Extra Test");
//   }
// }

// const vehicle1 = new Vehicle("Toyota", 180, 2010);

// //Abstraction Using Abstract Class
abstract class Vehicle {
  constructor(
    public name: string,
    public speed: number,
    public model: number
  ) {}

  abstract startEngine(): void;
  abstract endEngine(): void;
  test(): void {
    console.log("Test Engine");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    {
      console.log("Starting Engine");
    }
  }
  endEngine(): void {
    {
      console.log("End Engine");
    }
  }
}

const car1 = new Car("Honda", 130, 2020);
