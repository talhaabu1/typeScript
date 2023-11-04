{
  //? interface -> generic

  interface Developer<T, B = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: B;
  }

  type PoorDeveloper = {
    value: number;
    top: string;
    display?: string;
  };

  const poorDeveloper: Developer<PoorDeveloper> = {
    name: "Microsoft",
    computer: {
      brand: "sdfe",
      model: "23-3",
      releaseYear: 20 - 3 - 1003,
    },
    smartWatch: {
      value: 100,
      top: "china",
    },
  };

  interface RichDeveloper {
    value: number;
    top: string;
    price: number;
  }

  const richDeveloper: Developer<RichDeveloper, string> = {
    name: "Microsoft",
    computer: {
      brand: "sdfe",
      model: "23-3",
      releaseYear: 20 - 3 - 1003,
    },
    smartWatch: {
      value: 100,
      top: "china",
      price: 2000,
    },
    bike: "walton",
  };
}
