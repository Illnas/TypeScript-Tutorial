"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = '55';
var nada = { name: "nada", id: 3354 };
nada = { username: "hc", id: 334 };
function getDbId(id) {
    //making some API calls
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
//array
var data = [1, 2, 3, "4"];
var seatAllotment;
seatAllotment = "aisle";
