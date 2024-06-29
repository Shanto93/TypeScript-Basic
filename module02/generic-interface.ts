// // interface IMarriedDetails<T> {
// //   name: string;
// //   husband: T;
// // }

// // const Shanto: IMarriedDetails<string> = {
// //   name: "Sanjida Tanjir",
// //   husband: "Shanto",
// // };

// // type MarriedInfoTuple<T, S> = [T, S];
// // type WifeDetailes<W> = {
// //   wife: W;
// // };

// // const relation: MarriedInfoTuple<IMarriedDetails<string>, WifeDetailes<string>> = [
// //   {
// //     name: "Sanjida Tanjir",
// //     husband: "Shanto",
// //   },
// //   {
// //     wife: "Shanto Islam",
// //   },
// // ];


// interface ICrush<T,S>{
//     name: string;
//     husband: T;
//     wife: S;
// }

// type HusbandDetails<F=null> = {
//     name: string;
//     age: number;
//     family?: F;
// }
// type WifeDetails = {
//     name: string;
//     age: number;
// }

// const crush1: ICrush<HusbandDetails<string>, WifeDetails> = 
// {
//     name: "Sanjida Tanjir",
//     husband:{
//         name: "Shanto",
//         age: 24,
//         family: "Parents, Sister",
//     },
//     wife:
//     {
//         name:"Sanjida Tanjir",
//         age: 25,
//     }

// }