import "../Card.css"
import { capitalize } from "../../../utilities/capitalize"
export default function CardDescription(props){
    let {cssClasses, title, body} = props
    if (Array.isArray(cssClasses)) {
        cssClasses.push("card-description")
        cssClasses = cssClasses.join(" ")
    } else {
        cssClasses = "card-description"
    }
    const bodySection = body ? <p>{body}</p> : ""

    return <div className={cssClasses}>
        <span className="title">{capitalize(title)}</span>
        {bodySection}
    </div>
}