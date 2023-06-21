import $ from "jquery";
import bdata from "../data/bdata";
import '../css/board.css';
import { StyledBtn, StyledBtnBx } from "./Ban";
import { ReactElement } from "react";

function jqfn():any{
    $(()=>{
        $(".grid_bd li").each((i, v)=>{
            $(v).css({
                backgroundImage : `url(${bdata[i].src})`
            })
        })
    })
}
function Board():ReactElement{
    return (
            <div className="board">
                <ul className="grid_bd">
                    {
                        bdata.map((x,i)=>{
                            return (
                            <li key={i}>
                                <h4>{x.stit}</h4>
                                <h2>{x.btit}</h2>
                                    <StyledBtnBx>
                                        <StyledBtn className="detail n_btn">
                                            See Detail
                                        </StyledBtn>
                                    </StyledBtnBx>
                            </li>
                            )
                        })
                    }
                </ul>
                {jqfn()}
            </div>
    );
}
export default Board;