let greetings: string = "Hey, Ali!";

// greetings = 6; -- error
let myNum = 6;
//myNum.toUpperCase() // error
greetings.toLowerCase();
console.log(greetings);

//* boolean
let isLoggedIn: boolean = false;

//* type inference : You don't have to specify types always.Check below number example. Use when in complicated cases

//* number
//let userId: number = 21345;
let userId = 21345; // what is the difference between js? TS, automatically detect the type of the variable

//* Any
//let hero; // any type because we didn't specify the type
let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
