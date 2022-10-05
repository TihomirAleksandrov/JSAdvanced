function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let output = document.getElementsByTagName('textArea')[0];
   let totalPrice = 0;
   let products = [];

   shoppingCart.addEventListener('click', function(event){
      if(event.target.innerText === 'Add'){
         let button = event.target;
         let productName = button.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;
         
         let price = Number(button.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent);

         if (!products.find(x => x === productName)) {
            products.push(productName);
         }

         totalPrice += price;

         output.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;

         console.log(output);


      } else if(event.target.innerText === 'Checkout'){
         output.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
         let buttons = Array.from(shoppingCart.getElementsByTagName('button'));

         buttons.map(x => x.disabled = true);
      }
   })
}