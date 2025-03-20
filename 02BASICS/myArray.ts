//! Arrays
//const superHeros = []; // never type
// const superHeros: [] = []; // empty array type
const superHeros: string[] = []; // string array type
//* const heroPower: number[] = [];
const heroPower: Array<number> = []; // different way to define array. Works same

type User = {
  name: string;
  isActive: boolean;
};
const allUsers: User[] = [];

const MLModels: number[][] = [
  [255, 255, 255],
  // "hello", // error
  [255, 255, 255],
  [255, 255, 255],
];

superHeros.push("thor");
heroPower.push(100);

allUsers.push({ name: "ali", isActive: true });
