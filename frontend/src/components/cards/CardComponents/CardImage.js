import "../Card.css"
export default function CardImage(props){
    let img = props?.img ? props.img : "display-placeholder.gif"
    return <img src={`/${img}`} alt={""}></img>
}