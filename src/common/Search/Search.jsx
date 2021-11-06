import { useState } from "react";
import { useProductsAction } from "../../providers/ProductProvider";
import './Search.css';

const Search = ({filter}) => {
  const dispatch = useProductsAction();

  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({ type: "filter", event: filter });
    dispatch({ type: "search", event: e });
  };
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler}  className="searchBox"  placeholder="Search products ..."/>
    </div>
  );
};

export default Search;
