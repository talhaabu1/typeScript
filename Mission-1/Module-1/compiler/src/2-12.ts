{
  //? nullable types / unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  // unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const changeValue = value * 1000;
      console.log(
        "🚀 ~ file: 2-12.ts:18 ~ getSpeedInMeterPerSecond ~ changeValue:",
        changeValue
      );
    } else if (typeof value === "string") {
      const vlaueNumber = value.split(" ")[0];
      const changeValue = parseFloat(vlaueNumber) * 1000;
      console.log(changeValue);
    } else {
      console.log(" no outpt foutnd");
    }
  };

  getSpeedInMeterPerSecond(11);

  //? never

  function throwError(msg: string): never {
    throw new Error(msg);
  }

  throwError(" eroor type give my right input");
}
