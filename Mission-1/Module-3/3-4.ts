{
  // instanceof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound(): void {
      console.log("I am making Sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking!");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I am meawing!");
    }
  }

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (ainmal: Animal) => {
    if (isDog(ainmal)) {
      console.log("dog1");
      ainmal.makeBark();
    } else if (isCat(ainmal)) {
      console.log("cat2");
      ainmal.makeMeaw();
    } else {
      ainmal.makeSound();
    }
  };

  //? smart way tge handle korar jnne chaile amar function bebohar korte pari

  const dog = new Dog("Dog Bhai", "Dog");
  const cat = new Cat("Cat Bhai", "Cat");
  getAnimal(dog);
}
