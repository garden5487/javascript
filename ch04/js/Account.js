class Account {

    constructor(bank, id, name, balance) {
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

}

//기능
deposit(money){
    this.balance += money;
}

withdraw(money){
    this.balance -= money;
}

show(){
    document.write('<p>');
    document.write('은행명 : ' + this);
    document.write('계좌번호 : ');
    document.write('입금주 : ');
    document.write('현재잔액 : ');
    document.write('<p>');
}