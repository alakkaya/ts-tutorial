"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Max",
    email: "max@gmail.com",
    isActive: true,
};
// Object use case: thrown the functions as a parameter or return the object from the function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "ali", isPaid: false, email: "ali@gmail.com" }; // not stopping us
createUser(newUser); // its creating but we dont have email in the function
// return type is object
function createCourse() {
    return { name: "Usereactjs", price: 200 };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "123",
    name: "h",
    email: "h@gmail.com",
    isActive: false,
};
