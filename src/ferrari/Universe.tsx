import Article from "./module/Arti";
import './css/universe.css'
import { ReactElement } from "react";

function Universe():ReactElement{
    return(
        <>
            <h2 className="uni_tit">Universe</h2>
            <Article art="art1" />
            <Article art="art2" />
        </>
    )
}
export default Universe;