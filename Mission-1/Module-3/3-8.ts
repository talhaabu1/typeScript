{
  //? polymorphisom

  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours per days");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours per day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 5 hours per day");
    }
  }

  const getSleePingHours = (parm: Person) => {
    parm.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  getSleePingHours(person1);
  getSleePingHours(person2);
  getSleePingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  // pi * r * r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  // height * width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape3);
}
