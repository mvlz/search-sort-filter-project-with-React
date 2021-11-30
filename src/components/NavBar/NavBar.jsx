import './NavBar.css';
import { useProducts ,useProductsAction} from '../../providers/ProductProvider';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h3>IKEA Store</h3>
            <a href="https://dribbble.com/shots/15142870-Zoopla-Redesign-Property-Real-estate-search" target="_blank">Design inspiration</a>
        </nav>
     );
}
 
export default Navbar;