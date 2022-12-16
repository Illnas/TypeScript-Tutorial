/* Typeof checks for default types, instanceof checks if object was instance of class or something */

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());

    /*   (parameter) x: Date */
  } else {
    console.log(x.toUpperCase());

    /*  (parameter) x: string */
  }
}

type Fish = { swim: () => void };

type Bird = { fly: () => void };

//type predicator
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  } else {
    return "bird food";
  }
}

//discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

 /*  return shape.side * shape.side; */
}

//exhaustive checking
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
        return shape.length * shape.length

    default: 
        const _defaultForShape: never = shape
        return _defaultForShape
  }
}
