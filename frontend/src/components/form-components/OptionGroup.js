import { capitalize } from "../../utilities/capitalize"
const OptionGroup = props => {
    const {options, defaultValue} = props
    const returnValue = options.map(option => <option key={option} value={option}>{capitalize(option, "-")}</option>)
    
    if(defaultValue) returnValue.unshift(<option key={"default-select"} value={defaultValue}>{capitalize(defaultValue, "-")}</option>)
    console.log({options, defaultValue, returnValue})
   return <>{returnValue}</>
}
export default OptionGroup;