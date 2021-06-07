import "../Card.css"
export default function CardDescription(props = {title: "Title"}){
    const title = props?.title ? props.title : "Title"
    return <div>
        <span className={"title"}>{title}</span>
    </div>
}