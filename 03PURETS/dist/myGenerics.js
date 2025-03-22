"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// When a value is passed to this function, TypeScript knows it can be either boolean or number,
// but it can't track which specific type was passed through to the return value.
// return type might be any in the aboves
//  With generics, TypeScript preserves the exact type that was passed in.
// If you pass a string, TypeScript knows the return type is string. If you pass a number, it knows the return is a number.
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "asd", type: 3 });
function getSearchProducts(products) {
    // some db ops
    const myIndex = 3;
    return products[myIndex];
}
// in array functions show
const getMoreSearchProducts = (products) => {
    // some db ops
    const myIndex = 4;
    return products[myIndex];
};
