// string, number, boolean, null, undefined
var myName = '';
myName = '5';
// Arrays
var items = ['test', 10];
;
// Objects
var firstAccount = {
    name: 'Luis',
    balance: 10
};
var secondAccount = {
    name: 'Paul',
    balance: 20
};
var accounts = [firstAccount, secondAccount];
// Classes
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
