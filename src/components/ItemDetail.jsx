
import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext);

    const add = (quantity) => {
        addItem(product,quantity);
    }
    return (  
<Container className='mt-4 d-flex justify-content-center align-items-center vh-100'> 
    <div>
        <h1 className='title_prod'>{product.title}</h1>
        <Row className="align-items-center">
            <Col xs={12} md={5}>
                <Image src={product.image} fluid alt={product.title} />
            </Col>
            <Col xs={12} md={6}>
                <p className='description'>{product.description}</p>
                <div className='stock'><strong>Stock:</strong> {product.stock}</div>
                <div className='price_two'><strong>Price:</strong> ${product.price}</div>
                <ItemCount stock={product.stock} onAdd={add} />
            </Col>
        </Row>
    </div>
</Container>
    )}