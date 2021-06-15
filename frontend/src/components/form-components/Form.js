import Input from './Input'
const Form = props => {
    let  {id, submit, autocomplete, name} = props
    const isOn = autocomplete !==false ? "on" : "off"
    const submitEvent = (e) => {
        e.preventDefault()
        const inputs = e.target.querySelectorAll("input, select, textarea")
        if (typeof submit === "function") submit(inputs)
    }
   return  <form id={id} onSubmit={submitEvent} name={name} autocomplete={isOn}></form>
}
export default Form;
export {Input}
