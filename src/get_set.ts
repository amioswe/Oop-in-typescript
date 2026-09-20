class personalDetails{
  private name:string
 private age:number
 private pin :number

 private balance:number

constructor( name:string,age:number,pin:number,balance:number){
   this.age=age
   this.name=name
    this.balance=balance
this.pin=pin
}

set Age(value:number){

    if(value < 0 || value > 100){
        throw new Error('This is wrong age')
    }

this.age=value;

    
}

set Pin(pass:number){

    if(pass < 0 || pass >2000){

        throw new Error('PIN acces Not requreid');
    }

this.pin=pass


}









}




const disPlay=new personalDetails ('AmioDas',23,1213,454545);


disPlay.Age=54

disPlay.Pin=324

console.log(disPlay);

