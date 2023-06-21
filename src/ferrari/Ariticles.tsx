import { useLocation } from "react-router-dom";
import './css/articles.css'

function Articles(){
    const loc = useLocation();
    let aridx:string = loc.state.aridx;
    let artit:string = loc.state.artit;
    let ardate:string = loc.state.ardate;
    let arloca:string = loc.state.arloca;
    let arbsrc:string = loc.state.arbsrc;
    let arcont:string = loc.state.arcont;
    let arcontA:string[];
    arcontA = arcont.split("^");
    return(
        <div className="a_wrap">
            <div className="a_tit_wrap">
                <h2>{artit}</h2>
                <h4>{arloca}</h4>
            </div>
            <div className="a_img_wrap">
                <img src={arbsrc} alt={aridx} />
            </div>
            <div className="a_cont_wrap">
                <span className="a_date">{ardate}</span>
                <div className="a_art_wrap">
                    {
                        arcontA.map((v,i)=>{
                            if(v.includes("*")){
                                return <p key={i}><b>{v.split("*")[0]}</b>{v.split("*")[1]}</p>
                            }else{
                                return <p key={i}>{v}</p>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Articles;