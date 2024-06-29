//Arrow function
const createArray = <T, S>(param1: T, param2: S): [T,S] =>
    {
        return [param1, param2];
    }

    type PersonType = 
    {
        name: string;
        age: number;
    }

    // const result = createArray<string>('shanto');
    const result2 = createArray<PersonType, [string]>({name: 'Shanto Islam', age: 25}, ['Sanjida Tanjir']);
    const result3 = createArray<PersonType, Array<string>>({name: 'Shanta Islam', age: 25}, ['Sanjida Tanjir Liza']);
    console.log(result3);