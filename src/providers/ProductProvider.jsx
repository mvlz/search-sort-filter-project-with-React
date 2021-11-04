import React, { createContext, useContext,useReducer } from "react";
import {productsData} from "../db/ProductsData"
const ProductsContext = createContext();
const ProductsContextDispather = createContext();
// const initialState= [{
//     title: "JS",
//     price: "100 $",
//     id: 1,
//     quantity: 4,
//   },
//   {
//     title: "React",
//     price: "90 $",
//     id: 2,
//     quantity: 2,
//   },
//   {
//     title: "Css",
//     price: "80 $",
//     id: 3,
//     quantity: 3,
//   }];

const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }

    case "increment": {
      const productsInc = [...state];
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...productsInc[index] };
      product.quantity++;
      productsInc[index] = product;
      return productsInc;
    }

    case "decrement": {
      const decProducts = [...state];
      const decIndex = state.findIndex((p) => p.id === action.id);
      const productt = { ...decProducts[decIndex]};
      if (productt.quantity === 1) {
          const filteredProducts = state.filter((p) => p.id !== action.id);
          return filteredProducts;
        } else {
        productt.quantity--;
        decProducts[decIndex] = productt;
        return decProducts;
      }
    }

    case "edit": {
      const changeIndex = state.findIndex((p) => p.id === action.id);
      const changeProduct = { ...state[changeIndex] };
      const cloneProducts = [...state];
      changeProduct.title = action.event.target.value;
      cloneProducts[changeIndex] = changeProduct;
      return cloneProducts;
    }
  }
};
const ProductProvider = ({ children }) => {
    const [products, dispatch] = useReducer(reducer,productsData);
    return (
      <ProductsContext.Provider value={products}>
        <ProductsContextDispather.Provider value={dispatch}>
          {children}
        </ProductsContextDispather.Provider>
      </ProductsContext.Provider>
    );
  };
  
  export default ProductProvider;
  
  export const useProducts = () => useContext(ProductsContext);
  export const useProductsAction = () =>  useContext(ProductsContextDispather);
  