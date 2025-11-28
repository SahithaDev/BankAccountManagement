class BankAccount {
  customerName;
  balance = 0;
  accountNumber;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
}
const MyBank = new BankAccount("Sahitha", 1000);
MyBank.deposit(800);
console.log(MyBank);
