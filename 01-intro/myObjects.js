"use strict";
exports.__esModule = true;
var User = {
    name: "Nada",
    email: "nada@nada",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Nadatari", isPaid: false, email: "h@h.com" };
//Like this you can pass more information in object than doing it directly when calling function
createUser(newUser);
//function returns object
function createCourse(name, NAME) {
    return { name: "reactjs", price: 399 };
}
function createUsers(user) {
    return { name: "", email: "", isActive: false };
}
createUsers({ name: "", email: "", isActive: false });
var myUser = {
    _id: "1234",
    name: 'd',
    email: "h@h",
    isActive: false
};
myUser.email = "n@n";
