let score: number | string = 33;

score = "thirty-three";
score = 33;
// score = true;

type User3 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User3 | Admin = {
  name: "hitesh",
  id: 112,
};

hitesh = {
  // admin
  id: 334,
  username: "hc",
};

// function getDbId (id: number | string) {
//     // making some api calls
//   console.log(`db id is: ${id}`);
// }

getDbId(33);
getDbId("33");

function getDbId(id: number | string) {
  //id.toLowerCase(); // Property 'toLowerCase' does not exist on type 'number' so  does not exist on type 'string | number'.
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id.toFixed();
  }
}

// array

//const data: string | number[] = [1, 2, "3", 4, 5]; //error: string or number array
//const data2: string[] | number[] = [1, 2, "3", 4, 5]; // errrpr: string array or number array
const data3: (string | number | boolean)[] = [1, 2, "3", 4, 5]; // string and numbers can combiine

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"; // error
