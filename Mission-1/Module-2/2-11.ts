{
  // utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  // pick utility
  type personPick = Pick<Person, "name" | "email">;
  // pick utility

  // omit utility
  type personOmit = Omit<Person, "name" | "age">;
  // omit utility

  // required utility
  type PersonRequired = Required<Person>;
  // required utility

  // partial utility
  type PersonPartial = Partial<Person>;
  // partial utility

  // readonly utility
  const person1: Readonly<Person> = {
    name: "John",
    age: 122,
    contactNo: 11,
  };
  person1.age = 12;
  // readonly utility

  // record utility

  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, unknown>;

  const EmptyObj: Record<string, unknown> = {
    1: "",
    23: "",
  };

  const obj1: MyObj = {
    a: "John",
    b: "Jods",
    c: "naems",
    d: 12,
  };

  // record utility
}
