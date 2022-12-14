
console.log("TS is here!")

console.log("TS is here again!")


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
    //private, protected and public are acess modifiers
    protected _courseCount = 1 //protected accessible in this class and other classes that inherit it

     readonly city: string = "Zagreb" //private marks something not usable outside of its scope
    constructor(
        public email: string,
        public name: string,
        private userId: string //private properties
        ){
        this.email = email;
        this.name = name;
    }

    private deleteToken() {  //private method
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    } //get keyword for getter


    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) { //has no return type in setter
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }

        this._courseCount = courseNum
    } 
}

class SubUser extends User { //wont acquire private
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4
    }
}

const nada = new User("h@nada.com", "Nada", '1234')

