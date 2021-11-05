import { useState } from "react";
import { useProductsAction } from "../../providers/ProductProvider";

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
      <p>search for</p>
      <input type="text" value={value} onChange={changeHandler} />
    </div>
  );
};

export default Search;
