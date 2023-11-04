// destructuring

// object destructuring
{
  const user = {
    id: "user",
    name: {
      firstName: "John",
      lastName: "Smith",
      countryAddress: {
        name: "Dhaka",
        jala: "Gandaria Dhaka",
      },
    },
    contactNo: 101029201,
  };

  const {
    name: { countryAddress: { name } = {} },
  } = user;

  // arry destructuring

  const myFriends = ["abult", "kabul", "koorma", "kosdkrn", "jamal", "jack"];
  const [, , bestFriend, ...rest] = myFriends;
}
