"use strict";
// filename - .ts
// to compile tsc filename.ts -> node index.js
// to update everytime -> tsc filename --watch
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevoultion';
var isBeginner = true;
var total = 0;
var name = 'Satish';
var sentence = "My name is ".concat(name, "\nI am a beginner in ts");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//Array declarations
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuple for hetero data
// exactly same number of types
// can't swap types
// fixed number of values based on types
var person1 = ['Satish', 21];
// enum values begin with 0
// we can specify the values using =
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// any type
// unsure about type of value then we use any
var randomValue = 10;
randomValue = true;
randomValue = 'Satish';
var myVar = 10;
console.log(myVar.name);
// myVar();
// myVar.toUpperCase();
//unknown 
var myVar2 = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVar2)) {
    console.log(myVar2.name);
}
console.log(myVar2);
// (myVar2 as string).toUpperCase();
//type inference
var a;
a = 10;
a = true;
var b = 20;
// returns error
//b = true;
// union of types using pipe(|)
var multiType;
multiType = 20;
multiType = true;
//no intellisense support for anyType
var anyType;
anyType = 20;
anyType = true;
// functions
// optional parameters can be added by using ?
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
// default parameters can be added by using = in function parameters
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 200; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(5));
// function fullName(person: {firstName: string, lastName: string}){
//     console.log(`${person.firstName} ${person.lastName}`);
// }
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Satish',
    lastName: 'Kumar'
};
fullName(p);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morninng ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Satish');
console.log((emp1.employeeName));
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manger Delegating Work");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Satish');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// access modifiers
// by default each class member is public
