import OptionGroup from "./OptionGroup";
const Select = props => {
    const {type, id, name, onBlur, onChange, placeholder, value, options} = props

   return <select type={type} id={id} name={name} onBlur={onBlur} onChange={onChange} value={value}>
       <OptionGroup defaultValue={placeholder} options={options}/>
   </select>
}
export default Select;