const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}
// When a value is passed to this function, TypeScript knows it can be either boolean or number,
// but it can't track which specific type was passed through to the return value.
// return type might be any in the aboves
//  With generics, TypeScript preserves the exact type that was passed in.
// If you pass a string, TypeScript knows the return type is string. If you pass a number, it knows the return is a number.
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "asd", type: 3 });

function getSearchProducts<T>(products: T[]): T {
  // some db ops
  const myIndex = 3;
  return products[myIndex];
}

// in array functions show
const getMoreSearchProducts = <T>(products: T[]): T => {
  // some db ops
  const myIndex = 4;
  return products[myIndex];
};

//* generic classes with extends
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, 4);

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
