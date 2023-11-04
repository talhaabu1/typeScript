//? learning Function
// normal Function
// arrow Function

// nomal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(2, 10);

// arrow function
const addArrow = (num1: number, num2: number = 10): number => num1 + num2;

// object --> function --> method
const poorUser = {
  _name: "Talha",
  balance: 0,
  set addBalance(bal: string) {
    this._name = bal.toUpperCase();
  },
};

poorUser.addBalance = "sdf";

const arr: number[] = [1, 20, 30];

const newArray: number[] = arr.map((ele: number): number => ele * ele);
