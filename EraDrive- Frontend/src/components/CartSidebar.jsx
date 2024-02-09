import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useCart } from '../cartContext'; // Assicurati che il percorso sia corretto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMoneyBillTransfer, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, getCartTotal, clearCart } = useCart();

  return (
    <CSSTransition in={isCartOpen} timeout={10000} classNames="cart-sidebar" unmountOnExit>
      <div className="cart-sidebar">
        <button onClick={toggleCart} className='bg-danger text-white rounded-4 border border-none fw-bold mb-4'> <FontAwesomeIcon icon={faClose} className='text-white' /> Chiudi</button>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.CarModel} - {item.offerPackage}</span>
                <strong className='ms-2'>{item.price}</strong>
              </div>
            ))}
            <hr />
            <div className="cart-total mt-2">
              <strong>TOTALE: € {getCartTotal()}</strong>
            </div>
            <button onClick={clearCart} className='px-2 py-1 me-2 rounded-4 border border-none bg-secondary text-white fw-bold'> <FontAwesomeIcon icon={faTrashCan} className='me-1' />RIMUOVI </button>
            <button className="mt-2 px-2 py-1 fw-bold proceed-to-checkout bg-success text-white rounded-4 border border-none"> <FontAwesomeIcon icon={faMoneyBillTransfer} className='me-1' /> PROCEDI </button>
          </div>
        ) : (
          <p>Il tuo carrello è vuoto.</p>
        )}
      </div>
    </CSSTransition>
  );
};

export default CartSidebar;