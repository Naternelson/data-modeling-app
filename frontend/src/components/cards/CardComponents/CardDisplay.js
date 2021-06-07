import "../Card.css"
export default function CardDisplay(props){
    let img = props?.img ? props.img : "display-placeholder.gif"
    console.log(img)
    return <img src={`/${img}`} alt={""}></img>
}