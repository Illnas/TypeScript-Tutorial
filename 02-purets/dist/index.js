"use strict";
console.log("TS is here!");
console.log("TS is here again!");
/* class User {
    public email: string; //everything that you dont mark, is automatically public
    private name: string; //also can use # instead of private
     readonly city: string = "" //private marks something not usable outside of its scope
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
} */
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = ""; //private marks something not usable outside of its scope
        this.email = email;
        this.name = name;
    }
}
const nada = new User("h@nada.com", "Nada", '1234');
