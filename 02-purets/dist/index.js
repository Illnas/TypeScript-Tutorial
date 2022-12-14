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
    constructor(email, name, userId //private properties
    ) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Zagreb"; //private marks something not usable outside of its scope
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    } //get keyword for getter
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const nada = new User("h@nada.com", "Nada", '1234');
