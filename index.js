/* Terminology -- Classes vs. Objects:

Classes are the mechanism by which we structure our code in OOP.

A Class is a blueprint, in which you create your properties and functionality.
An Object is the actual product developed from the blueprint.
An Object is an instance of a Class!


So, a class is a template for objects, and an object is an instance of a class.  When we create an object from a class, that object will inherit everything in the class, including the properties and functionality.

Class: Animal
Properties :
Name
Weight
Height
Type
Location

Functionality:
describe()

Object : dog

let dog = new Animal(); */

class Animal {
    constructor(animalName, weight, height, type, location){
    
    this.animalName = animalName;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.location = location;
    }
    introduce () {
        console.log(`${this.animalName} weighs ${this.weight} and is ${this.height} long. It is a  ${this.type}
         this animal can be located in ${this.location}`);
    
    }
    }
    let turtle = new Animal('Venus',  '5 lbs','8 inches','yellow belly slider','Rhode Island' );
    
    turtle.introduce();
    console.log(turtle);

    /*Inheritance
 is one of the Pillars of Object-Oriented Programming, and is key when reusing code in an Object-Oriented program.  It is possible to reuse properties and methods when a new class is created from an existing class.

Use the keyword extends to inherit properties and methods from a different class. */
class Person {
    constructor (newName, gradeLevel) {
        this.name =newName;
        this.gradeLevel = gradeLevel;
    }
    introduce() {
        return `My name is ${this.name} and Welcome to the ${this.gradeLevel}.`;
    } 
}
class Teacher extends Person {
    constructor (name, courseName, gradeLevel) {
        super(name);
    
        this.courseName = courseName;
        this.gradeLevel = gradeLevel;
}
// this can be different words dont have to be introduce everytime
introduceYourself() {
console.log(`My name is ${this.name}, and I will be teaching your ${this.courseName} class and welcome to the ${this.gradeLevel} grade.` );
}
}
let teacher = new Teacher('Ms. Angle', 'Trigonmetry', '9th');
console.log(teacher.introduce());
teacher.introduceYourself()