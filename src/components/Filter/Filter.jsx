import { useState } from "react";
import Search from "../../common/Search/Search";
import SelectComponent from "../../common/Select/Select";
import {
  useProductsAction,
  useProducts,
} from "../../providers/ProductProvider";
import style from "./Filter.module.css";
import { Switch } from "@mui/material";

const Filter = () => {
  const dispatch = useProductsAction();
  const products = useProducts();
  // const setProducts = useProductsAction();
  const TotalItems = products.filter((p) => p.quantity > 0).length;
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [type, setType] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", event: selectedOption });
    dispatch({ type: "sort", event: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", event: selectedOption });
  };
  const typeHandler = (selectedOption) => {
    setType(selectedOption);
    dispatch({ type: "type", event: selectedOption });
  };
  const filterOptions = [
    { value: "", label: "All" },
    { value: "beds", label: "beds" },
    { value: "cabinets", label: "cabinets" },
    { value: "chairs", label: "chairs" },
    { value: "clocks", label: "clocks" },
    { value: "desks", label: "desks" },
    { value: "tables", label: "tables" },
  ];
  const sortOptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
  ];
  const typeOptions = [
    { value: "", label: "All" },
    { value: "second", label: "second hand" },
    { value: "new", label: "new" },
  ];

  return (
    <div className={style.filterContainer}>
      {/* <select onChange={filterHandler} value={value}>
        <option value="">All</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select> */}
      {/* <Select
        // defaultValue={[filterOptions[2], filterOptions[3]]}
        // isMulti
        // name="colors"
        options={filterOptions}
        // className="basic-multi-select"
        // classNamePrefix="select"
        onChange={filterHandler}
        value={value}
        className={style.select}
      /> */}
      <Search filter={filter} type={type}/>
      <div className={style.extraFeat}>
        <h2 className={style.result}>{TotalItems} results</h2>
      <div className={style.mapControl}>
      <Switch
          // checked={checked}
          // onChange={handleChange}
          defaultChecked 
          inputProps={{ "aria-label": "controlled" }}
        /> <span>show map
        </span>
      </div>
      </div>
      <div className={style.filtersContainer}>
        <SelectComponent
          title="filter by"
          onChange={filterHandler}
          options={filterOptions}
          value={filter}
        />
        <SelectComponent
          title="sort by"
          options={sortOptions}
          onChange={sortHandler}
          value={sort}
          className={style.selectSort}
        />
        <SelectComponent
        title="type"
        options={typeOptions}
        onChange={typeHandler}
        value={type}
        // defaultValue={typeOptions[1]}
      />
        {/* <label htmlFor="price" className={style.selectEl}>
        <BiTrash/>
      <select id="price" className={style.selectt}>
      <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      </label> */}
      </div>
    </div>
  );
};

export default Filter;
