// type Arry = string;
// type Oumber = number;
// type Accepte = (Arry | Oumber)[];
// const aryyAndString: Accepte = ["a", "b", "c", 10];

// const userInfo: { readonly name: string; age: number; country?: string } = {
//   name: "John",
//   age: 13,
// };

// {
//   const myArry: any[] = [
//     1,
//     3,
//     4,
//     [1, 12, 34, [123, 22, 222], 93, 35],
//     6,
//     7,
//     8,
//     9,
//     10,
//     20,
//     12,
//     222,
//     3,
//   ];

//   const [, , , [, , a]] = myArry;
//   console.log(a); // 1, 34, 93
// }

// {
//   function userInfo(user: ) {
//     console.log(user.name);
//   }

//   const user: {
//     name: string;
//     age: number;
//   } = {
//     name: "John",
//     age: 199,
//   };

//   userInfo(user);
// }
// console.log(last);

{
  type User = {
    id: number;
    name: string;
  };
  const user: Array<User> = [
    {
      id: 13,
      name: "John",
    },
    {
      id: 19,
      name: "baby",
    },
    {
      id: 111,
      name: "talha",
    },
  ];
  function getPropertyFromArray<T, K extends keyof T>(
    arry: T[],
    key: K
  ): T[K][] {
    return arry.map((obj) => obj[key]);
  }

  console.log(getPropertyFromArray(user, "id"));
}
