class BkashAccount{
 public phone:number

 private pin :number

 private balance:number

constructor(phone:number,pin:number,balance:number){
    this.balance=balance
this.phone=phone
this.pin=pin
}

getBalance(pin:number){

if (this.pin === pin){
    return this.balance;
}

 return `PIN is WRONG`;
}






}
const FullHistory=new BkashAccount (8389,445,4343);




console.log(FullHistory.getBalance(445));