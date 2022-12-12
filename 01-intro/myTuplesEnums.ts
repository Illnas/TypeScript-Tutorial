
/* const user:(string | number)[] = [1, "hc"] */

let tUser: [string, number, boolean]

//strict order, tuples make sure that order is important
tUser = ['Nada', 1, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [123, "123"]

newUser[1] = 'h@h.com'



export {}