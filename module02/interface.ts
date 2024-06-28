type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  address: string;
}

const users: IExtendedUser = {
  name: "Shanto",
  age: 25,
  address: "Dhaka",
};
console.log(users.name);

//Using type
type SignatureAdd = (num1: number, num2: number) => number;

const AddNumber: SignatureAdd = (num1, num2) => {
  return num1 + num2;
};

//Using interface
interface ISignatureAdd {
  (n1: number, n2: number): number;
}

const AddNumbers: ISignatureAdd = (n1, n2) => {
  return n1 + n2;
};

//Using type Alias in array
type ArrayType = number[];
const studens: ArrayType = [1, 2, 3, 4];

//Using Interface in array
interface IArrayType {
  [index: number]: number;
}
const std: IArrayType = [1, 2, 3, 4];
