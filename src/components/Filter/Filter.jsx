import { useState } from "react";
import Select from "react-select";
import Search from "../../common/Search/Search";
import SelectComponent from "../../common/Select/Select";
import { useProductsAction } from "../../providers/ProductProvider";
import style from "./Filter.module.css";
const Filter = () => {
  const dispatch = useProductsAction();

  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
      dispatch({ type: "filter", event: selectedOption});
      dispatch({ type: "sort", event: sort });
      setFilter(selectedOption);
    // console.log(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    setSort(selectedOption);
    dispatch({ type: "sort", event:selectedOption });
  };
  const filterOptions = [
    { value: "", label: "All" },
    { value: "Xs", label: "Xs" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const sortOptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
  ];
  return (
    <div className={style.filterContainer}>
      <p>filter</p>
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
      {/* <Select
        options={sortOptions}
        onChange={sortHandler}
        value={sort}
        className={style.select}
        // defaultValue={sortOptions[0]}
      /> */}
      <Search filter={filter}/>
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
      />
    </div>
  );
};

export default Filter;
