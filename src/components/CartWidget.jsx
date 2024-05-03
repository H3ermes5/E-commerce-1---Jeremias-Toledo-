import { Link } from 'react-router-dom';
import cart from '../assets/cart.png'


export const CartWidget =  () =>{
    return(
        <Link to = "/cart">
            <img className='carrito' src={cart} alt="Cart" />
            <span>1.100.100</span>
        </Link>
    );
};

