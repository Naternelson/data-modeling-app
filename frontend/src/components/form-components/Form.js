import Input from './Input'
const Form = props => {
    let  {id, submit, autocomplete, name, children} = props
    const isOn = autocomplete !==false ? "on" : "off"
    const submitEvent = (e) => {
        e.preventDefault()
        const foo = typeof submit === "function" ? submit(e.target) : null
    }
   return  <form id={id} onSubmit={submitEvent} name={name} autoComplete={isOn}>{children}</form>
}
export default Form;
export {Input}
