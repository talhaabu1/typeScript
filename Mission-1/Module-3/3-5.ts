{
  //? access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      return this._balance;
    }
  }

  const ali1 = new BankAccount(122, "MR. Rock", 1000);
  console.log(ali1.addDeposit(10));
  console.log(StudentAccount.test());
  //? access modifiers
}
