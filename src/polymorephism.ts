class Animal{
    private name:string

constructor(name:string){
this.name=name;


}
makesound():void{
console.log('Animal can make sound')

}


}

class Cat extends Animal{

makesound(): void {
    console.log('Cat sound be meow maow')
}

}

const cat= new Cat('cat');

cat.makesound();

