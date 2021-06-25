import { capitalize } from "../../utilities/capitalize"
const OptionGroup = props => {

    const {options} = props
    const returnValue = options.map(option => <option key={option} value={option}>{capitalize(option, "-")}</option>)
   return <>{returnValue}</>
}
export default OptionGroup;