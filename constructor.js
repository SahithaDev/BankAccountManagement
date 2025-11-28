function BankAccount(customerName, balance = 0) {
  //constructor creation
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();

  this.deposit = function (amount) {
    //method inside the constructor
    this.balance = amount + balance;
  };

  this.withdraw = function (amount) {
    this.balance = balance - amount;
  };
}
const MyBank = new BankAccount("Sahitha", 1000);
MyBank.deposit(200); //calling the method
MyBank.withdraw(200);
console.log(MyBank);
