var groceryItems = ["Guacamole", "Chips", "Salsa", "Jalapeno Peppers"]; 
var groceryPrices = [2.99, 1.99, 3.99, 2.50];
var shoppingCartPrices = [];
var shoppingCartItems = [];

function addToList(item,price){ 
  shoppingCartPrices.push(price);
  shoppingCartItems.push(item);
  console.log(price);
  console.log(item);
  return;
}

function addStuff(shoppingCartItems, ShoppingCartPrices){
  for(var i = 0; i < shoppingCartItems; i++){
    console.log(shoppingCartItems[i]);
  }
  
  return;
}

function createCart(){
 
}
    
function myFunction() {
    alert("Hello! I am an alert box!");
}