{
  // ternary operator || optional chaining || nullish coalescing operator
  const age: number = 18;
  if (age >= 18) {
    // console.log("adult");
  } else {
    // console.log("not Adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = false;

  const result1 = isAuthenticated ?? "gust";
  // console.log(result1);

  //? optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "John",
    address: {
      city: "dca",
      road: "Road 902",
      presentAddress: "noalsdkf",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanetn Address";
  console.log(permanentAddress);
}
