import { useLocation } from "react-router-dom";
import './css/articles.css'
import ImgSlide from "./module/ImgSlide";
import { Link } from "react-router-dom";
import article_data from "./data/ardata";
import { StyledBtn } from "./module/Ban";
import ScrollTop from "./common/ScrollTop";


function Articles(){
    const loc = useLocation();
    let aridx = loc.state.aridx
    let locObj = article_data[Number(aridx)-1]
    return(
        <div className="a_wrap">
            <ScrollTop />
            <div className="a_tit_wrap">
                <h2>{locObj.tit}</h2>
                <h4>{locObj.loca}</h4>
            </div>
            <div className="a_img_wrap">
                <img src={locObj.bsrc} alt={locObj.idx} />
            </div>
            <div className="a_cont_wrap">
                <span className="a_date">{locObj.date}</span>
                <div className="a_art_wrap">
                    {
                        locObj.cont.split("^").map((v,i)=>{
                            if(v.includes("*")){
                                return <p key={i}><b>{v.split("*")[0]}</b>{v.split("*")[1]}</p>
                            }else{
                                return <p key={i}>{v}</p>
                            }
                        })
                    }
                </div>
                {
                    locObj.rsrc.length !== 0 &&
                    <ImgSlide idx={Number(locObj.idx)}/>
                }
            </div>
            <Link to="/art" state={{
                aridx : (Number(aridx)-1 !== 0 ? Number(aridx)-1 : article_data.length-1)
            }}><StyledBtn className="prevBtn arti">prev</StyledBtn></Link>
            <Link to="/art" state={{
                aridx : (Number(aridx)+1 > article_data.length? 1 : Number(aridx)+1)
            }}><StyledBtn className="nextBtn arti">next</StyledBtn></Link>
        </div>
    )
}
export default Articles;