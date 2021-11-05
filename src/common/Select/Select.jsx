import Select from "react-select";
const SelectComponent = ({title, ...rest }) => {
    // const rest = options,onChange,value;
    return ( 
        <div>
            <span>{title}</span>
            <Select {...rest} />
        </div>
     );
}
 
export default SelectComponent;