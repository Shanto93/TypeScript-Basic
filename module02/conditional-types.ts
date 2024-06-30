// // //Example 01

// // type Friends = "Rabbi" | "Sanjida" | "Habiba";

// // type RemoveFriends<T, K> = T extends K ? never : T;

// // type CheckFriends = RemoveFriends<Friends, "Titon">;

// // //Example 02

// type Sheikh = {
//   wife01: string;
//   wife02: string;
//   girlfriend01: string;
// };

// type ConditionProperty<T, U, V, W> = T extends U
//   ? true
//   : T extends V
//   ? false
//   : T extends W
//   ? true
//   : null;
// type CheckWife = ConditionProperty<Sheikh, "wife01", "wife02", "girlfriend01">;
