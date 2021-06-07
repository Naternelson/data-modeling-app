import "./Hero.css"
function UploadHero() {

    return (
    <div className={"hero"}>
        <img src={"/upload-hero.jpg"} alt={"upload-icon"}></img>
        <form>
            <label for={"upload-csv"}>Upload a CSV File</label>
            <input onChange={()=>console.log("hello")} type={"file"} accept={".csv"} id={"upload-csv"} name={"upload-csv"} style={{visibility: `hidden`}}/>
        </form>
    </div>
    )
}

export default UploadHero;
