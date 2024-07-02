class Teacher {
  name: string;
  private age: number;
  protected balance: number;
  constructor(name: string, age: number, balance: number) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }
  getMoney() {
    console.log(`Total balance is: ${this.balance}`);
  }
}
class Student extends Teacher {
  constructor(name: string, age: number, balance: number) {
    super(name, age, balance);
  }
  getMon() {
    console.log(stud1.balance);
  }
}

const tech1 = new Teacher("Abu Nowshad Chy", 35, 30000);
const stud1 = new Student("Shanto Isalm", 25, 2000);
