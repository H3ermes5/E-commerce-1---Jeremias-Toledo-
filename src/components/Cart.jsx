import Container from 'react-bootstrap/Container';
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
        }). finally(() => {
            clear();
            setValues(initialValues);
    });
    };

    const handleClear = () =>  clear();
    
    const handleRemove = (id) =>  removeItem(id);

    return (
        <Container className='mt-4'>
            <h1>Products</h1>
            {items.map(i => (
                <ul key={i.title}>
                    <li>Prod:{i.title}</li> 
                    <li>Cant:{i.quantity}</li> 
                    <li>${i.price}</li>
                    <li onClick={() => handleRemove(i.id)}>X</li>
                </ul>
            ))}
            <div>Total: ${total()}</div>
            <button onClick={handleClear}>Empty</button>
            {items?.length > 0 && <form>
                <label>Name</label>
                <input type="text" value={values.name} name='name' onChange={handleChange} />
                <label>Phone</label>
                <input type="text" value={values.phone} name='phone' onChange={handleChange} />
                <label>Email</label>
                <input type="email" value={values.email} name='email' onChange={handleChange} />
                <button type='button' onClick={ handleSubmit }>
                    Enviar
                </button>
            </form>}
        </Container>
    );
};
