
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
   /*  startTrial: () => string */
   startTrial(): string,
   getCoupon(couponname: string, value: number): number
}

interface User {
    //this is reopening of interface
    githubToken: string
}

interface Another {

}


interface Admin extends User, Another {
    role: "admin" | "ta" | 'learner'

}


const nada: Admin = {
    dbId: 123,
    email: "h@h.com",
    userId: 1234,
    role: "admin",
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "nada", off: 23) => {
        return 10
    },
    githubToken: "github"
}

nada.email = "dwadkandja"




export {}