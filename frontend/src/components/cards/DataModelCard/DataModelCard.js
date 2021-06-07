import CardDescription from "../CardComponents/CardDescription"
import CardDisplay from "../CardComponents/CardDisplay"


export default function DataModelCard(){
    return <div className={"card"}>
        <CardDisplay/>
        <CardDescription/>
    </div>
}