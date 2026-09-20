class chaShop{
title:string
shop:any=[]

constructor (title:string){

this.title=title
}
buyInfo(name:string,price:number){
   
this.shop.push({name,price})


}

totalItem(){
 
const total=this.shop.reduce((acc,item) => acc + item.price,0)


return total


}




}
 const shop1=new chaShop('kanaipur Tea stall');
shop1.buyInfo('Faridpur Tea stall',233);
shop1.buyInfo('cake',23);
 console.log(shop1.totalItem());
