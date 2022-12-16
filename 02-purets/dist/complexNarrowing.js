"use strict";
/* Typeof checks for default types, instanceof checks if object was instance of class or something */
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        /*   (parameter) x: Date */
    }
    else {
        console.log(x.toUpperCase());
        /*  (parameter) x: string */
    }
}
//type predicator
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    /*  return shape.side * shape.side; */
}
//exhaustive checking
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.length;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
