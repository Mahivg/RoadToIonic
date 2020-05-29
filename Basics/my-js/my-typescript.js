"use strict";
let x;
x = 12;
let myStr = "str";
let myBool = false;
let myStr1;
myStr1 = "123";
let myStr2 = "123";
let myObj = {
    name: "test",
    age: 18,
};
console.log(myObj);
let myObj2 = {
    name: "test",
    age: 18,
};
let myAry = [];
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
if (Role.Admin == 0) {
}
var myAny;
myAny = 10;
myAny = "dtr";
function getName() {
    console.log("Name");
}
var getAge = () => 10;
var age = getAge();
function addNum(num1, num2, ret) {
    if (ret == "number") {
        return num1 + num2;
    }
    if (ret == "string") {
        return num1 + num2 + "";
    }
}
let res = addNum(1, 1, "string");
res = addNum(1, 1, "number");
console.log(res);
// export class Person {
//   name: string;
//   id: number;
//   getName() {
//     return this.name;
//   }
// }
// var person1: Person = new Person();
// person1.name = "ad";
// person1.id = 13;
// myObj2 { name : string, age: number }
const nudsfdsfsd = "1";
