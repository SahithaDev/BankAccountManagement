class Animal {
  speak() {
    console.log("Animals make sounds");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dogs bark");
  }
}
class Bird extends Animal {
  speak() {
    console.log("Birds chirp");
  }
}
const sound = new Animal();
const sound1 = new Dog();
const sound2 = new Bird();
sound.speak();
sound1.speak();
sound2.speak();
