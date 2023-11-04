{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type userWithRole1 = User1 & { role: number };

  type rollNumber = number;

  interface User2 {
    name: string;
    age: number;
  }

  interface userWithRole2 extends User2 {
    country: string;
    home?: number;
  }

  const user1: userWithRole2 = {
    name: "John",
    age: 36,
    country: "bangalDesh",
  };
}
