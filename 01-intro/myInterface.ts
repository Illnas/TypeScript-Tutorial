
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
   /*  startTrial: () => string */
   startTrial(): string,
   getCoupon(couponname: string, value: number): number
}

const nada: User = {
    dbId: 123,
    email: "h@h.com",
    userId: 1234,
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "nada", off: 23) => {
        return 10
    }
}

nada.email = "dwadkandja"




export {}