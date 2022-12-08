"use strict";
exports.__esModule = true;
console.log("Functions");
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("Upper function");
signUpUser("Nada", "email", true);
loginUser("Name", "email");
/*
function getValue (myVal: number) {
    if(myVal > 5) {
        return true
    }
    return "200 OK"
} */
var getHello = function (s) {
    return "";
};
var heroes = ["thor", 'spiderman', "ironman"];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1 throws error bcs return is void
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
