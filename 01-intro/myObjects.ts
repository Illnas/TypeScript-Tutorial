
const User = {
    name: "Nada",
    email: "nada@nada",
    isActive: true
}

function createUser ({name: string, isPaid: boolean}) {

}

let newUser = {name: "Nadatari", isPaid: false, email: "h@h.com"}

//Like this you can pass more information in object than doing it directly when calling function

createUser(newUser)

//function returns object
function createCourse (name: "NADA", NAME: number): {}{
    return {name: "reactjs", price: 399}
}


type User = {
    name: string
    email: string
    isActive: boolean
}

function createUsers (user: User): User {
    return {name: "", email: "", isActive: false}
}

createUsers({name: "", email: "", isActive: false})


type Users = {
    readonly _id: string; //cant manipulate
    name: string;
    email: string;
    isActive: boolean
    credCardDetails?: number  //optional sign === ?
}

let myUser: Users = {
    _id: "1234",
    name: 'd',
    email: "h@h",
    isActive: false
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // & combines types
    cvv: number
}

myUser.email = "n@n"
/* myUser._id = '2314' */

export {}