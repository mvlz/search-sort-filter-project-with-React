import styles from "./Product.module.css";
import { BiTrash, BiMinus, BiPlus } from "react-icons/bi";

const Product = ({product,onChange,onDel,onDecrement,onIncrement}) => {
  return (
    <div className={styles.product}>
      <h3>{product.title}</h3>
      <p>{product.price} </p>
      {/* <input
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}
      <button
        className={`${styles.inc} ${styles.btn}`}
        onClick={onIncrement}
      >
        <BiPlus />
      </button>
      <p className={styles.value}>{product.quantity}</p>
      <button
        className={`${styles.btn} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? <BiMinus /> : <BiTrash />}
      </button>
      <button className={styles.btn} onClick={onDel}>
        <BiTrash />
      </button>
    </div>
  );
};

export default Product;
