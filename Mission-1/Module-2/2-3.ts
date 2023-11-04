{
  //? generic type
  type genericArray<T> = Array<T>;
  //   const rollNumbers: number[] = [1, 2, 3, 4, 5];
  const rollNumbers: genericArray<number> = [1, 2, 3, 4, 5];

  //   const mentors: string[] = ["mr. n", "mr. 1", "mr. 2", "mr. 3"];
  const mentors: genericArray<string> = ["mr. n", "mr. 1", "mr. 2", "mr. 3"];

  //   const boolArray: boolean[] = [true, false, false, true, false, true];
  const boolArray: genericArray<boolean> = [
    true,
    false,
    false,
    true,
    false,
    true,
  ];

  const user: genericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 20,
    },
    {
      name: "sdf",
      age: 22,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y, Z> = [X, Y, Z];

  const manush: GenericTuple<string, string, string> = [
    "mr. n",
    "mr. 1",
    "mr. 2",
  ];

  const userWithID: GenericTuple<
    number,
    { name: string; role: number },
    string
  > = [1234, { name: "John", role: 299 }, "name"];
}
