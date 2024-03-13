import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';


export const ItemListContainer = ({ greeting }) => (
    <Container className='mt-4'>
      <h2>{greeting}</h2>
    </Container>
  );
  
  ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
  };