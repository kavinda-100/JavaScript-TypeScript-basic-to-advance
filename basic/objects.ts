// Purpose: Demonstrate the use of objects in JavaScript/TypeScript.

//main function to run the code
export default function main(){


//TODO: basic object
let basicObject = {
    name: 'basicObject',
    description: 'This is a basic object'
}
//accessing the object properties
console.log("Basic object -----------------------------------");
console.log(basicObject.name);
console.log(basicObject.description);
console.log("-------------------------------------------------");


//TODO: object with a method
let objectWithMethod = {
    name: 'objectWithMethod',
    description: 'This is an object with a method',
    log(){
        console.log('This is an object with a method');
    }}

//accessing the object properties
console.log("Object with method -----------------------------------");
console.log(objectWithMethod.name);
console.log(objectWithMethod.description);
objectWithMethod.log();
console.log("-------------------------------------------------");

//TODO: creating an object
let myObject: any = new Object();
// assign the values to the object
myObject.name = 'created object';
myObject.description = 'This is an object';
myObject.log = function(){
    console.log('This is an created object');
}

console.log("Create an Object ----------------------------------------");
console.log(myObject.name);
myObject.log()
console.log("-------------------------------------------------");



}