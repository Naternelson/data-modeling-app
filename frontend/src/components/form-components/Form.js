import Input from './Input'
const Form = props => {
    console.log("form")
    //Defaults
    let  {id, submit, autocomplete, name, children} = props
    const isOn = autocomplete !==false ? "on" : "off"
    const anon = () => {}
    submit = typeof submit === "function" ? submit : anon
    
    //Events
    const submitEvent = (e) => {
        e.preventDefault()
        submit(e.target)
    }
    
    //render
    return  <form id={id} onSubmit={submitEvent} name={name} autoComplete={isOn}>{children}</form>
}
export default Form;
export {Input}
