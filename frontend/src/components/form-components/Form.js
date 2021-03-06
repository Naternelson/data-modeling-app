import Input from './Input'
import './Form.css'
const Form = props => {
    //Defaults
    let  {id, submit, autocomplete, name, children, cssClasses} = props
    const isOn = autocomplete !==false ? "on" : "off"
    const anon = () => {}
    submit = typeof submit === "function" ? submit : anon
    
    //Events
    const submitEvent = (e) => {
        e.preventDefault()
        submit(e.target)
    }
    
    //render
    return  <form id={id} className={cssClasses} onSubmit={submitEvent} name={name} autoComplete={isOn}>{children}</form>
}
export default Form;
export {Input}
