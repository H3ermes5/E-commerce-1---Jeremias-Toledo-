import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title className='title'>{product.title}</Card.Title>
            <Card.Text className='text'>{product.description}</Card.Text>
            <Card.Text className='text'>{product.categoryId}</Card.Text>
            <Card.Text className='price'>PRICE : {product.price}</Card.Text>
            <Link to={`/item/${product.id}`}><Button variant="dark" className="button-buy">BUY</Button></Link>
        </Card.Body>
    </Card>
);
