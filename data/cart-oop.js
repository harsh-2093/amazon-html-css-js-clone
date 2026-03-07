function Cart(localStoragekey){
  const cart={
   cartItem:undefined,

    loadFromStorage(){
  this.cartItem=JSON.parse(localStorage.getItem(localStoragekey));

 if(!this.cartItem){
  this.cartItem=[{
  productId:'3ebe75dc-64d2-4137-8860-1f5a963e534b',
  quantity:2,
  deliveryOptionsId:'1'
 },
 {
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
  deliveryOptionsId:'2',
 }];
 }
 },

  saveToStorage(){
  localStorage.setItem(localStoragekey,JSON.stringify(this.cartItem));
 },


 
  addToCart(productId){
  const input = document.querySelector(`.add-cart-quantity-${productId}`);
const itemvalue = input ? Number(input.value) : 1;
  let matchingItem;

    this.cartItem.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem=cartItem;
      }
    });
    
    if(matchingItem){
      matchingItem.quantity+=Number(itemvalue);
    }
    else{
      this.cartItem.push({
      productId:productId,
      quantity:Number(itemvalue),
      deliveryOptionsId:'1',
    });
    }
    this.saveToStorage();
    

},


removeFromCart(productId){
  const newCart=[];
  this.cartItem.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  });

  this.cartItem=newCart;
  this.saveToStorage();

},


 updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;

    this.cartItem.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem=cartItem;
      }
    });

    matchingItem.deliveryOptionsId=deliveryOptionId;

    this.saveToStorage();


}

};
return cart;
}



const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');
 cart.loadFromStorage();
 businessCart.loadFromStorage();

 console.log(cart);
 console.log(businessCart);

