import Product from '../Products/Product';
import { useProducts, useProductsAction } from '../../providers/ProductProvider';

import './ProductList.css'


const ProductList = () => {

    const products = useProducts();
    const dispatch=useProductsAction()
    return (<div className="product-list">
        {!products.length && <div className="empty">Empty</div>}
        {products.map((product) => {
            return (
            <Product

                product={product}
                name = { product.title}
                price = { product.price}
                key={product.id}
                onDel={() => dispatch({type:"remove",id:product.id})}
                onIncrement={() => dispatch({type:"increment",id:product.id})}
                onDecrement={() => dispatch({type:"decrement",id:product.id})}
                onChange={(e) => dispatch({type:"edit",id:product.id, event: e})}
                onLike={() => dispatch({type:"like", id: product.id})}
            />
            )
        })
        } 
        </div>
    )
}

export default ProductList;