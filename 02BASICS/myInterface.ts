//* Interface is a way to define a custom type in TypeScript
//* Re-opening an interface is allowed in TypeScript. So we can extend, add new properties instead of creating a new interface. This is not same for types
interface User {
  readonly dbId: number; // readonly
  userId: number;
  email: string;
  googleId?: string; // optional
  //startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 123,
  role: "admin",
  userId: 3121,
  email: "h@g.com",
  githubToken: "tokentokentoken",
  startTrail: () => {
    return "started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};

hitesh.email = "h@hc.com";
