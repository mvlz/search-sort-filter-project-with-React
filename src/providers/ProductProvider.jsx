import React, { createContext, useContext,useReducer } from "react";
import {productsData} from "../db/ProductsData"
import _ from "lodash";
const ProductsContext = createContext();
const ProductsContextDispather = createContext();
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
      // if (productt.quantity === 1) {
      //     const filteredProducts = state.filter((p) => p.id !== action.id);
      //     return filteredProducts;
      //   } else {
        productt.quantity--;
        decProducts[decIndex] = productt;
        return decProducts;
      // }
    }

    case "edit": {
      const changeIndex = state.findIndex((p) => p.id === action.id);
      const changeProduct = { ...state[changeIndex] };
      const cloneProducts = [...state];
      changeProduct.title = action.event.target.value;
      cloneProducts[changeIndex] = changeProduct;
      return cloneProducts;
    }

    case "filter":{
      const value = action.event.value;
      if(value === ""){
        return productsData;
      } else{
        const updatedProducts = productsData.filter(p => p.availableSizes.indexOf(value) >= 0);
        return updatedProducts
      }
    }
    case"sort":{
      const value = action.event.value;
      if(value === "highest"){
        return _.orderBy(state,["price"],["desc"])
      } else{
        return _.orderBy(state,["price"],["asc"])
      }
    }
    case "search":{
      const searchItem = action.event.target.value;
      const searchedProduct = state.filter(p=> p.title.toLowerCase().includes(searchItem))
      return searchedProduct;
    }
    case "type":{
      const value = action.event.value;
      if(value === ""){
        return productsData;
      } else {
        return productsData.filter(p=> p.type === value);
      }
    }
    case "like":{
      const productsLike = [...state];
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...productsLike[index]};
      product.isLiked = !product.isLiked;
      productsLike[index] = product;
      return productsLike;
    }

    default: return state;
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
  