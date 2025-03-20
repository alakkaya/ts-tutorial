const User = {
  name: "Max",
  email: "max@gmail.com",
  isActive: true,
};

// Object use case: thrown the functions as a parameter or return the object from the function

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "ali", isPaid: false, email: "ali@gmail.com" }; // not stopping us

createUser(newUser); // its creating but we dont have email in the function

// return type is object
function createCourse(): { name: string; price: number } {
  return { name: "Usereactjs", price: 200 };
}

//!  Type Aliases: We can create our own types
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser2({ name: "", email: "", isActive: true });
//!----------- Readonly properties----------------
type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; //! optional
};

let myUser: User2 = {
  _id: "123",
  name: "h",
  email: "h@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber & cardDate & { cvv: number };

// myUser._id = "1234"; // error because of readonly

export {};
