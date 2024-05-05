
import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext);

    const add = (quantity) => {
        addItem(product,quantity);
    }
    return (  
    <Container className='mt-4'> 
    <h1>{product.title}</h1>
    <img src= {product.image} style={{height:400, width:"auto"}} alt={product.title} />
    <p>{product.description}</p>
    <div>{`Stock ${product.stock}`}</div>
    <div>{`Price ${product.price}`}</div>
    <ItemCount stock={product.stock} onAdd ={add}/>
    </Container>);
}