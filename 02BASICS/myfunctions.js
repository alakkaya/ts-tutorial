"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
function addTwo(num) {
  return num + 2;
}

addTwo("5"); // type is any! so there is problem
*/
function addTwo(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
// Arrow Functions
var signUpUser2 = function (name, email, isPaid) { };
// How can we use default values in functions?
function signUpUser3(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
}
addTwo(2); // works
