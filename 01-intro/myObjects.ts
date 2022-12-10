
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

export {}