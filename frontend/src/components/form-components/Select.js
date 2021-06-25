import OptionGroup from "./OptionGroup";
const Select = props => {
    const {type, id, name, onBlur, onChange, placeholder, value, options} = props

   return <select type={type} id={id} name={name} onBlur={onBlur} onChange={onChange} value={value} placeholder={placeholder}>
       <OptionGroup options={options}/>
   </select>
}
export default Select;