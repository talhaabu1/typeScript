//? Reference Type --> object

const user: {
  readonly company: "Programming Hero"; // type --> literal types | readonly property
  firstName: string;
  middle?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "MD",
  lastName: "Hafaze",
  isMarried: true,
};
