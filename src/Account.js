const CreateAccount = (amount = 0) => {
  return {
    operations: [],
    balance: amount,
    deposit(n) {
      if (n < 0) {
        throw "Deposit amount should be positive";
      }
      this.balance += n;
      this.operations.push({
        date: new Date(),
        amount: n,
        balance: this.balance
      });
    },
    withdraw(n) {
      if (n < 0) {
        throw "Withdraw amount should be positive";
      }
      this.balance -= n;
      this.operations.push({
        date: new Date(),
        amount: -n,
        balance: this.balance
      });
    },
    printStatement() {
      console.log(
        this.operations.map(op => {
          const amount = op.amount < 0 ? "" + op.amount : "+" + op.amount;
          const date = op.date.toLocaleDateString();
          return {
            date,
            amount,
            balance: op.balance
          };
        })
      );
    }
  };
};

export default CreateAccount;
