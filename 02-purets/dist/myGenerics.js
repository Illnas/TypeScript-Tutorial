"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//this is better than any keyword
function identityThree(val) {
    return val;
}
identityThree("nada");
//shortcut for Type === T, same letter or word, you can define your own types and pass it
function identityFour(val) {
    return val;
}
/* identityFour<Bottle>({}) */
function getSearchProducts(product) {
    // do some database operations
    const myIndex = 3;
    return product[myIndex];
}
//not a jsx syntax but generics, in React, this is normal 
const getMoreSearchProducts = (searches) => {
    //do some database operations
    const myIndex = 4;
    return searches[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne, valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
