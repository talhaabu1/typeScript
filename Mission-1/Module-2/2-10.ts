{
  // mapped types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());

  //   console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  // type AreaString = {
  //   [key in keyof AreaNumber]: boolean;
  // };

  // type Height = AreaNumber["height"];

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "1",
    width: 12,
  };
}
