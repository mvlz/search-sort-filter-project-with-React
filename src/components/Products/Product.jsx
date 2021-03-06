import styles from "./Product.module.css";
import { BiMinus, BiPlus, BiCartAlt, BiStar } from "react-icons/bi";
import { IconButton} from "@mui/material";
import { MdFavorite,MdFavoriteBorder } from "react-icons/md";

const Product = ({ product, onDecrement, onIncrement, onLike }) => {
  return (
    <div className={styles.product}>
      <button onClick={onLike} className={styles.likeBtn}>
          {product.isLiked ? <MdFavorite  className={styles.likedProduct}/> : <MdFavoriteBorder className={styles.notLiked} animation="spin"></MdFavoriteBorder>}
        </button>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={product.img} alt={product.title} />
      </div>
      <div className={styles.productInf}>
        <h3 className={styles.productName}>{product.title}</h3>
        <p className={styles.productInc}>{product.description}</p>
        {/* <input
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}

        <div className={styles.score}>
          <span className={styles.scoreNum}>5</span>
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />
        </div>
        <div className={styles.manageProduct}>

          <button
            className={`${styles.btn} ${
              product.quantity === 1 && styles.disable
            }`}
            onClick={onDecrement}
            disabled={product.quantity > 1 ? false : true}
          >
            {/* {product.quantity > 1 ? <BiMinus /> : <BiTrash />} */}
            <BiMinus />
          </button>
          <p className={styles.value}>{product.quantity}</p>

          <button
            className={`${styles.inc} ${styles.btn}`}
            onClick={onIncrement}
          >
            <BiPlus />
          </button>
          {/* <button className={styles.btn} onClick={onDel}>
            <BiTrash />
          </button> */}
        </div>
        <div className={styles.productFooter}>
          <p className={styles.productPrice}> ??{product.price}</p>
          {/* <Button variant="contained" startIcon={<BiCartAlt />}>
            buy
          </Button> */}
          <IconButton color="primary" aria-label="add to shopping cart">
            <BiCartAlt />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
