{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: number;
    address: string;
  };

  const student1: Student = {
    name: "talha",
    age: 19,
    gender: "Male",
    contactNo: 29311234,
    address: "Dhaka",
  };

  const student2: Student = {
    name: "mir",
    age: 21,
    gender: "Male",
    address: "Khulna",
  };

  type IsAdmin = number;

  const isAdmin: IsAdmin = 100;

  // arrow function
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  add(10, 10);
}
