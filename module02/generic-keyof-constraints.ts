type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = 'name'|'age'|'address';    //manually
type usingKeyOf = keyof PersonType;      //using keyof constraints

function PersonDetails<X,Y extends keyof X>(myDetails:X, key: Y)
{
    myDetails[key];
}

const mydetails:PersonType =
{
    name: 'Shanto Islam',
    age: 25,
    address: 'Narsingdi, Dhaka',
}

const result = PersonDetails(mydetails,'age');