import styles from "./Product.module.css";
import { BiTrash, BiMinus, BiPlus } from "react-icons/bi";

const Product = ({ product, onChange, onDel, onDecrement, onIncrement }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={product.img} />
      </div>
      <div className={styles.productInf}>
        <h3>{product.title}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br /> Quia nihil eius quibusdam, error odio
        </p>
        {/* <input
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}
        <div className={styles.manageProduct}>
          <button
            className={`${styles.inc} ${styles.btn}`}
            onClick={onIncrement}>
            <BiPlus />
          </button>

          <p className={styles.value}>{product.quantity}</p>
          <button
            className={`${styles.btn} ${
              product.quantity === 1 && styles.remove
            }`}
            onClick={onDecrement}>
            {product.quantity > 1 ? <BiMinus /> : <BiTrash />}
          </button>

          <button className={styles.btn} onClick={onDel}>
            <BiTrash />
          </button>
        </div>
        <p className={styles.productPrice}> €{product.price} </p>
      </div>
    </div>
  );
};

export default Product;
