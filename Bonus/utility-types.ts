//------------------Pick type -> Pick type from property of a class-----------------------------
/*The Pick utility type in TypeScript is a powerful feature that allows you to create a new type by selecting a subset of properties from an existing type.

Syntax: Pick<Type, Keys>
*/

interface Person {
  name: string;
  age: number;
  address?: string;
  email: string;
}

//for taking single property type
type Contact = Pick<Person, "address">;

//For taking multiple property types
type Contacts = Pick<Person, "address" | "email">;

//---------------------------------Omit Type------------------------------------------------------
/*In TypeScript, the omit type operation allows you to create a new type by omitting properties from an existing type. This is done using the Omit<T, K> utility type, where T is the type you want to pick properties from, and K represents the property or properties you want to omit.*/

type OmitContact = Omit<Person, "email">;
type OmitMultiple = Omit<Person, "age" | "address">;

//----------------------------------Partial Type......................................
//To make all the property optional
type Optional = Partial<Person>;

//..................................Required Types.............................
//To make all the property required
type RequiredProps = Required<Person>;


//.................................Readonly Type...............................
const person:Readonly <Person>={
    name:"Shanto Islam",
    age:25,
    address:"Narsingdi",
    email:"shanto@gmail.com"
}
