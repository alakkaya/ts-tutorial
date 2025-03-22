"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Deleting token");
    }
    get getAppleEmail() {
        return this.email;
    }
    get courseCount() {
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
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "Hitesh", "1");
console.log(hitesh.getAppleEmail);
