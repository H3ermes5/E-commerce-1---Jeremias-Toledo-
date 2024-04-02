import { Item } from "./Item";


export const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {products.map((product) => (
                <div key={product.id}>
                <Item key={product.id} product = {product} />
                </div>
            ))}
        </div>
    );
};