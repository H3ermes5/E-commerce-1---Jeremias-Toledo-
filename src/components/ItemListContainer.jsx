import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({greeting}) => (
    <Container className='mt-4'>
    <h2>{greeting}</h2>
    </Container>
)