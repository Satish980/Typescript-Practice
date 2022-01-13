// filename - .ts
// to compile tsc filename.ts -> node index.js
// to update everytime -> tsc filename --watch

export {}
let message = "Welcome back"
console.log(message)

let x = 10;
const y = 20;
let sum;
const title = 'Codevoultion';

let isBeginner: boolean = true;

let total: number = 0;

let name: string = 'Satish'

let sentence: string = `My name is ${name}
I am a beginner in ts`
console.log(sentence)

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

//Array declarations
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]

//Tuple for hetero data
// exactly same number of types
// can't swap types
// fixed number of values based on types
let person1: [string, number] = ['Satish', 21]

// enum values begin with 0
// we can specify the values using =
enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c)

// any type
// unsure about type of value then we use any

let randomValue: any = 10;
randomValue = true;
randomValue = 'Satish'

let myVar: any = 10;
console.log(myVar.name);
// myVar();
// myVar.toUpperCase();

//unknown 
let myVar2: unknown = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVar2)){
    console.log(myVar2.name)
}
console.log(myVar2);
// (myVar2 as string).toUpperCase();


//type inference
let a;
a = 10;
a = true;

let b = 20;
// returns error
//b = true;

// union of types using pipe(|)
let multiType: number | boolean;
multiType = 20;
multiType = true;

//no intellisense support for anyType
let anyType : any;
anyType = 20;
anyType = true;

// functions
// optional parameters can be added by using ?
function add(num1: number, num2?:number): number{
    if(num2)
        return num1 + num2;
    else
        return num1;
}
// default parameters can be added by using = in function parameters
function add2(num1: number, num2:number = 200): number{
    if(num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5,10));

console.log(add(5));

// interfaces

interface Person{
    firstName: string;
    lastName?: string;
}

// function fullName(person: {firstName: string, lastName: string}){
//     console.log(`${person.firstName} ${person.lastName}`);
// }
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: 'Satish',
    lastName: 'Kumar'
};

fullName(p);

// classes
class Employee{
    public employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morninng ${this.employeeName}`)
    }
}

let emp1 = new Employee('Satish');
console.log((emp1.employeeName));
emp1.greet();


class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manger Delegating Work`)
    }
}

let m1 = new Manager('Satish')
m1.delegateWork();
m1.greet();
console.log(m1.employeeName)

// access modifiers
// by default each class member is public
