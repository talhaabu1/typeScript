{
  //? geeter and seeter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private get getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      return this._balance;
    }
  }

  const ali1 = new BankAccount(122, "MR. Rock", 1000);
  ali1.addDeposit = 50;
  console.log(ali1.getBalance);
  console.log(ali1);
  //   console.log(StudentAccount.test());
  //? access modifiers
}
