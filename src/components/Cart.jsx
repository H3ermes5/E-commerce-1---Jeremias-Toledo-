import { Container, Form, Button, Table, Image } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValues = {
    name: "",
    phone: "",
    email: ""
}

export const Cart = () => {
    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem } = useContext(CartContext);

    const total = () => {
        return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const handleChange = (ev) =>{
        setValues((prev) => {
            return {
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleSubmit = () => {
        const order = {
            buyer: values,
            items,
            total: total(),
        };
        
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => { 
            if(id) {
                alert("Su orden: " + id + " ha sido completada!");
            }
        }).finally(() => {
            clear();
            setValues(initialValues);
        });
    };

    const handleClear = () =>  clear();
    
    const handleRemove = (id) =>  removeItem(id);

    return (
        <Container className='mt-4'>
            <h1>Products</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>${item.quantity * item.price}</td>
                            <td><Image src={item.image} fluid style={{ width: '50px', height: 'auto' }} alt={item.title} /></td>
                            <td>
                                <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>Total: ${total()}</div>
            <Button variant="outline-danger" className="my-3" onClick={handleClear}>Empty</Button>
            {items.length > 0 && 
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={values.name} name='name' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" value={values.phone} name='phone' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={values.email} name='email' onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type='button' onClick={ handleSubmit }>
                        Send
                    </Button>
                </Form>
            }
        </Container>
    );
};
