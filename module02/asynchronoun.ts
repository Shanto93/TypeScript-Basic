// const createPromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data fetched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Data is not fetched");
//     }
//   });
// };

// const getPromise = async (): Promise<void> => {
//   const result = await createPromise();
// };

// //Data Fatching from json placeholder

interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getToDo = async (): Promise<IToDo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
};

const geToDoData = async (): Promise<void> => {
  const result = await getToDo();
  console.log(result);
};

geToDoData();
