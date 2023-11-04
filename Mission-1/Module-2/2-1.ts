{
  // type assertions
  let anything: any;
  anything = "next level web side";
  anything = 111;
  // define this type
  (anything as number).toFixed();
  //

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `convertedValue is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(11) as number;
  const result2 = kgToGm("10") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (err: any) {
    console.log(err.message);
  }

  console.log(result1, result2);
}
