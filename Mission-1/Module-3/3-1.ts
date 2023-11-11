{
  //? OOP is
  class Animal {
    // typeScript use the repet code not write
    // public name: string;
    // public sound: string;
    // public height: number;

    // parameter properties

    constructor(
      public name: string,
      public sound: string,
      public height: number
    ) {}

    makeSound() {
      console.log(`The Animal ${this.name} is ${this.sound}`);
    }
  }
  //? OOP is

  const dog = new Animal("dog", "gew gew", 15);
  const cat = new Animal("cat", "mew mew ", 10);
  console.log(dog.sound);
}
