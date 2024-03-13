import cart from '../assets/cart.png'


export const CartWidget =  () =>{
    return(
        <div>
            <img src={cart} alt="Cart" />
            <span>1.000.001</span>
        </div>
    )
}