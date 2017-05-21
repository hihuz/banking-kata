import CreateAccount from "./Account";

describe("CreateAccount", () => {
  test("should create an object with default prop of balance at 0", () => {
    const Account = CreateAccount();
    expect(Account.balance).toEqual(0);
  });

  test("if provided as arg, should set initial balance to that amount", () => {
    const amount = 20;
    const Account = CreateAccount(amount);
    expect(Account.balance).toEqual(amount);
  });
});

describe("CreateAccount: deposit", () => {
  let Account;
  beforeEach(() => {
    Account = CreateAccount(20);
  });

  test("should be a method", () => {
    expect(typeof Account.deposit).toEqual("function");
  });

  test("should add given amount to the balance", () => {
    Account.deposit(10);
    expect(Account.balance).toEqual(30);
  });

  test("should throw if given amount is negative", () => {
    expect(() => {
      Account.deposit(-10);
    }).toThrow();
  });

  test("should add a new operation to the list", () => {
    Account.deposit(12);
    const op = Account.operations[0];
    expect(op.amount).toEqual(12);
    expect(op.balance).toEqual(32);
    expect(op.date instanceof Date).toEqual(true);
  });
});

describe("CreateAccount: withdraw", () => {
  let Account;
  beforeEach(() => {
    Account = CreateAccount(30);
  });

  test("should be a method", () => {
    expect(typeof Account.withdraw).toEqual("function");
  });

  test("should substract the given amount to the balance", () => {
    Account.withdraw(10);
    expect(Account.balance).toEqual(20);
  });

  test("should throw if given amount is negative", () => {
    expect(() => {
      Account.withdraw(-10);
    }).toThrow();
  });

  test("should add a new operation to the list", () => {
    Account.withdraw(12);
    const op = Account.operations[0];
    expect(op.amount).toEqual(-12);
    expect(op.balance).toEqual(18);
    expect(op.date instanceof Date).toEqual(true);
  });
});

describe("CreateAccount: printStatement", () => {
  test("should log the operations to the console", () => {
    const Account = CreateAccount(30);
    Account.deposit(12);
    Account.withdraw(10);
    Account.withdraw(8);
    Account.deposit(10);
    Account.printStatement();
  });
});
