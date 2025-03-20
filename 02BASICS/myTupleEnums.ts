//! Tuples : helpfull in api calls which spesifiic order
// let user4: (string | number)[] = ["hc",1]; // u migt want to spesific typ for indexs
let tUser: [string, number, boolean];

tUser = ["hc", 1, true];
// tUser=[1,"hc",true]; // error

let rgb: [number, number, number] = [255, 0, 0];

type User = [number, string];

const newUser: User = [112, "example@google.com"];
newUser[0] = 113;
// newUser.push(true);

export {};
