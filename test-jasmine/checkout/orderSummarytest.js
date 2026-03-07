import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";

import { loadFromStorage } from '../../data/cart.js';


describe('test suite:Render order summary',()=>{
  it('displays the cart',()=>{
    document.querySelector('.js-test-container').innerHTML=`
    <div class="js-order-summary"></div>
    `;

    spyOn(localStorage,'getItem').and.callFake(()=>{
          return JSON.stringify([{
            
            productId:'3ebe75dc-64d2-4137-8860-1f5a963e534b',
            quantity:2,
            deliveryOptionsId:'1'
           },
           {
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionsId:'2',
          
           }]);
        });
        loadFromStorage();

        renderOrderSummary();
  });
});