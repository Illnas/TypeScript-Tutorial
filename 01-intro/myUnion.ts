
let score: number | string = 33

score = 44

score = '55'

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let nada: User | Admin = {name: "nada", id: 3354}

nada = {username: "hc", id: 334}

function getDbId (id: number | string) {
    //making some API calls
    if(typeof id === "string") {
        id.toLowerCase()
    }


    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")


//array
const data: (number | string)[] = [1, 2, 3, "4"]



let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
/* seatAllotment = "crew" */




export {}