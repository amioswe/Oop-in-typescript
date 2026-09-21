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


class Student extends personalDetails{

private fees:number
constructor( name:string,age:number,pin:number,balance:number,fees:number){

super (name,age,balance,pin,)
this.fees=fees;

}

}
const finalDisplay=new Student('Durjoy',24,1224,23343,2333333);

console.log(finalDisplay);

// const disPlay=new personalDetails ('AmioDas',23,1213,454545);


// disPlay.Age=54

// // disPlay.Pin=324

// console.log(disPlay);
// // finalDisplay.Age=34

