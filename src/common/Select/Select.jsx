import Select from "react-select";
import styles from "./Select.module.css";
const SelectComponent = ({title, ...rest }) => {
    // const rest = options,onChange,value;
    return ( 
        <div className={styles.selectContainer}>
            <span className={styles.selectTitle}>{title}</span>
            <Select {...rest} className={styles.selectTag}
            styles={{
                control: (provided, state) => ({
                  ...provided,
                  boxShadow: "none",
                  border: "none",
                  outline: "0",
                  border: state.isFocused && "none"
                }),
                menu: (provided, state) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none"
                }),
                option: (provided, state) => ({
                   ...provided,
                   backgroundColor: state.isFocused && "lightgray",
                   color: state.isFocused && "red"
                })
              }}
            />
        </div>
     );
}
 
export default SelectComponent;