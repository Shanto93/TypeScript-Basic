// //Keyof Guard

// type Alphanumeric = number | string;
// function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
//   if (param1 == "number" && param2 == "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// console.log(add("1", "2"));
// console.log(add(3, 4));

//in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: `admin`;
};

const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    return `This is admin user`;
  } else {
    return `This is normal user`;
  }
};

const normal1: NormalUser = { name: "Shanta Islam" };
const admin1: AdminUser = { name: "Sanjida Tanjir", role: "admin" };

console.log(getUser(normal1));
console.log(getUser(admin1));
