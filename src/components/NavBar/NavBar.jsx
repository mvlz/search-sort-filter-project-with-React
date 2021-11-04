import './NavBar.css';
import { useProducts ,useProductsAction} from '../../providers/ProductProvider';

const Navbar = () => {
    const products = useProducts();
    const setProducts = useProductsAction();
    const TotalItems= products.filter((p)=> p.quantity > 0).length 
    return ( 
        <nav className="navbar">
            <h3>hi it's navbar</h3>
            <span>{TotalItems}</span>
        </nav>
     );
}
 
export default Navbar;