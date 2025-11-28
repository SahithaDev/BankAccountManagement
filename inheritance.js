class BankAccount {
  customerName;
  balance = 0;
  accountNumber;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
  withdraw(amount) {
    this.balance = this.balance - amount;
  }
}
class SavingsAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
  }
}
const MyBank = new SavingsAccount("Sahitha", 2000);
MyBank.deposit(50);
console.log(MyBank);
