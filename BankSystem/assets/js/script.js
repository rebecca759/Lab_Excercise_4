let accounts = new Array();
let found;

const account1 = {
    '123': 1000
}

const account2 = {
    '103': 1000
}

const account3 = {
    '133': 1000
}

accounts.push(account1,account2,account3);

const BankAccount = {
    accountNumber: '',
    accountName: '',
    balance: 100,
    maxAmount: 9000,
    insufficient_fund: false,
    limit_exceeded: false,
    account_exists: true,

    //deposit function
    deposit: function(amount) {
        this.balance += Number(amount);   
    },

    //withdraw function
    withdraw: function(amount) {
        if (Number(amount) >= this.balance - 20) {
            this.insufficient_fund = true;
            return false;
        }

        else if (Number(amount) > this.maxAmount) {
            this.limit_exceeded = true;
            return false;
        }
        
        else {
            this.balance = this.balance - Number(amount);
            return true;
        }

    },

    //balance function
    getBalance: function() {
        return this.balance;
    },

    //transfer function
    transfer: function (amount,account_num) {
        found = false;

        for (let i = 0; i < accounts.length; i++) {
            if (account_num in accounts[i]) {
                found = true;
                accounts[i][account_num] += Number(amount);
                break;
            }
        }

        if (found == false) {
            account_exists = false;
            return false;
            
        }

        if (Number(amount) >= this.balance - 20) {
            return false;
        }

        else {
            this.balance = this.balance - Number(amount);
            return true;
        }     
    }
}

//variable declaration
//user's choice of service
let service;

//deposit/transfer amount
let deposit_amount;
let transfer_amount;
let withdraw_amount;
let canWithdraw = true;
let transfer_account;
let canTransfer = true;

//Adding Self Invoking function expression

(function() {
    BankAccount.accountNumber = prompt("Enter your account number: ");
    BankAccount.accountName = prompt("Enter your name: ");

    while (true) {
        service = prompt("Hello " + BankAccount.accountName + "! Which of the following services would you like \n" +
                "1. Deposit \n" +
                "2. Withdraw \n" +
                "3. Get balance \n" +
                "4. Transfer \n" +
                "5. Exit");

        if (service == 1) {
            deposit_amount = prompt("Enter amount to deposit: ");
            BankAccount.deposit(deposit_amount);
            console.log("Your account " + BankAccount.accountNumber + " has been credited with ETB " + deposit_amount + ". \n" +
                        "Your current balance is ETB " + BankAccount.getBalance());
        }

        else if (service == 2) {
            withdraw_amount = prompt("Enter amount to withdraw: ");
            canWithdraw = BankAccount.withdraw(withdraw_amount);
            
            if (canWithdraw) {
                console.log("Your account has been debited with ETB " + withdraw_amount + ". \n" +
                    "Your current balance is ETB " + BankAccount.getBalance());
            }
            else if (BankAccount.insufficient_fund) {
                console.log("Can't withdraw: Insufficient funds.");
            }

            else if (BankAccount.limit_exceeded) {
                console.log("Can't withdraw: maximum withdrawal amouunt exceeded.");
            }
        }

        else if (service == 3) {
            console.log("Your current balance is ETB " + BankAccount.getBalance());
        }

        else if (service == 4) {
            transfer_account = prompt("Enter account number of account your transfering to: ");
            transfer_amount = prompt("Enter amount to transfer: ");
            canTransfer = BankAccount.transfer(transfer_amount,transfer_account);

            if (canTransfer) {
                console.log("You have transfered ETB " + transfer_amount + " to account " + transfer_account);
            }

            else if (!BankAccount.account_exists) {
                console.log("Account doesn't exist.");
            }
            
            else  {
                console.log("Can't transfer: Insufficient funds.");
            }
        
        }

        else if (service == 5) {
            break;
        }

        else {
            console.log("Service not available: choose services 1-4");
        }

        
    }
    
})();