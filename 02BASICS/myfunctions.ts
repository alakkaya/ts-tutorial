/*
function addTwo(num) {
  return num + 2;
}

addTwo("5"); // type is any! so there is problem
*/
function addTwo(num: number) {
  return num + 2;
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(name, email, isPaid);
}

// Arrow Functions
let signUpUser2 = (name: string, email: string, isPaid: boolean) => {};
// How can we use default values in functions?
function signUpUser3(name: string, email: string, isPaid: boolean = false) {
  console.log(name, email, isPaid);
}

// Adding the return type of the function
function addTwo2(num: number): number {
  // return "hello; // error"
  return num + 2;
}

addTwo(2); // works

// Add more than one return type
function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

// arrow function
const getHello = (s: string): string => {
  return "Hello";
};

const heros = ["thor", "ironman", "captain"];
//const heros = [1, 2, 3]; // ts autamatically detect the type of the array

heros.map((hero): string => {
  // return 2; // error
  return hero;
});

// spesify the void type for not to return anything
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// never:this means that the function throws an exception or
// terminates execution of the program.

function handleError(errmsg: string): void {
  throw new Error(errmsg);
}

export {};
