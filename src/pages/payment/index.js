import React from 'react';

import './index.scss';

import { useCartState } from 'cart-context';
import CartItem from './CartItem';
import CurrencyFormat from 'components/general/CurrencyFormat';

function CartPage() {
  const { products, totalQuantity, totalPrice } = useCartState();
  const productIds = Object.keys(products).filter((id) => products[id]);

  return (
    <div className="cart">
      <div className="cart__main">
        <div className="cart__items">
          {productIds.map((id) => (
            <CartItem key={id} product={products[id]} />
          ))}
        </div>
        
        <div>
          <div className="cart__summary">

            Subtotal ({totalQuantity} items):{' '}
            <CurrencyFormat
              className="bold"
              currencyCode="USD"
              value={totalPrice}
            />
          
          </div>
          <div className="cart__buynow">Pay</div>
        </div>
      </div>
      
    </div>
  );
}

export default CartPage;
