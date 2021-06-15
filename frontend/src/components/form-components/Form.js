import Input from './Input'
const Form = props => {
    console.log(props)
    let  {id, submit, autocomplete, name, children} = props
    const isOn = autocomplete !==false ? "on" : "off"
    const submitEvent = (e) => {
        e.preventDefault()
        const inputs = e.target.querySelectorAll("input, select, textarea")
        if (typeof submit === "function") submit(inputs)
    }
   return  <form id={id} onSubmit={submitEvent} name={name} autoComplete={isOn}>{children}</form>
}
export default Form;
export {Input}
