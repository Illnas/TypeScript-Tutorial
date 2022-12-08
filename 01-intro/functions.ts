
console.log("Functions")

function addTwo (num: number): number {
    return num + 2
}

function getUpper (val: string) {
    return val.toUpperCase()
}

function signUpUser (name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}


let myValue = addTwo(5)
getUpper("Upper function")
signUpUser("Nada", "email", true);
loginUser("Name", "email")

/* 
function getValue (myVal: number) {
    if(myVal > 5) {
        return true
    }
    return "200 OK"
} */

const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", 'spiderman', "ironman"]

heroes.map((hero): string => {
    return `Hero is ${hero}`
})


function consoleError (errmsg: string): void {
    console.log(errmsg);
    // return 1 throws error bcs return is void
}

function handleError (errmsg: string): never{
    throw new Error(errmsg);
}


export {}