{
  //? generic constraint with keyof operator

  //   type Vehicle = {
  //     bike: string;
  //     car: string;
  //     ship: string;
  //   };
  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;
  const owner2: Owner2 = "ship";

  function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

  const user = {
    name: "user",
    age: 26,
    address: "ctg",
  };

  console.log(getPropertyValue(user, "address"));
}
