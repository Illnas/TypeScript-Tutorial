

const score: Array<number> = []

const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

//this is better than any keyword
function identityThree<Type>(val: Type): Type {
    return val
}

identityThree("nada")

//shortcut for Type === T, same letter or word, you can define your own types and pass it
function identityFour<T>(val: T): T {
    return val
}


interface Bottle {
    brand: string,
    type: number
}

/* identityFour<Bottle>({}) */

function getSearchProducts<T>(product: T[]): T {
    // do some database operations
    const myIndex = 3
    return product[myIndex]
}

//not a jsx syntax but generics, in React, this is normal 
const getMoreSearchProducts= <T,>(searches: T[]): T => {
    //do some database operations
    const myIndex = 4
    return searches[myIndex]
}

interface Database {
    connection: string,
    userName: string,
    password: string
}


function anotherFunction<T, U extends Database> (valOne: T, valTwo: U): object {
    return {
        valOne, valTwo
    }
}

/* function anotherFunction<T, U extends number> (valOne: T, valTwo: U): object {
    return {
        valOne, valTwo
    }
} */

/* anotherFunction(3, {}) */

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}