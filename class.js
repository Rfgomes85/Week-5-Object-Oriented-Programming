const studentNames = ['Bill', 'Ted' , 'Bob'];

studentNames.forEach{(name)=> {
    console.log(`Hi ${name}`);
}
}

class Animal {
    speak() {
      console.log('The animal makes a sound');
    }
  }
  class Dog extends Animal {
    speak() {
      console.log('The dog barks');
    }
  }
  let myAnimal = new Animal();
  let myDog = new Dog();
  myAnimal.speak(); // Output: The animal makes a sound
  myDog.speak(); // Output: The dog barks

  myDog.speak();