import { Link } from 'react-router-dom';
import cart from '../assets/cart.png'

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartWidget =  () =>{
    const {items} = useContext(CartContext);

    const total = items.reduce((acc, elem) => acc + elem.quantity, 0);
    return(
        <Link to = "/cart">
            <img className='carrito' src={cart} alt="Cart" />
            <span>{total}</span>
        </Link>
    );
};

