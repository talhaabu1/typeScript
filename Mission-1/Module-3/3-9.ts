{
  // Abstraction : 1. interface 2. abstract

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test() {
      console.log("I am testing");
    }
  }

  const toyotoCar = new Car1();
  toyotoCar.startEngine();

  // abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("Iam starting the car enginge");
    }
    stopEngine(): void {
      console.log("I am stopping the car");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }

  // const hondacar = new Car2();
  // hondacar.stopEngine();
  //   const Vehicle1: Vehicle1 = {
  //     name: "Tata",
  //     model: "na890",
  //   };
}
