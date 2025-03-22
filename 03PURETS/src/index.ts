// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// hitesh.city = "Delhi";

// short cuts
class User {
  protected _courseCount = 1;

  readonly city: string = "";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {
    this.email = email;
    this.name = name;
  }
  private deleteToken() {
    console.log("Deleting token");
  }

  get getAppleEmail(): string {
    return this.email;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // setters not allowed any rtuern type include void
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hitesh = new User("h@h.com", "Hitesh", "1");
console.log(hitesh.getAppleEmail);
