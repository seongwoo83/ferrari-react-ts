import "../Index.css";
import Board from "./module/Board";
import Model from "./module/Model";
import News from "./module/News";
import {Ban} from "./module/Ban";
import { ReactElement } from "react";

function Main():ReactElement {
    return (
        <>
            <Ban />
            <Model />
            <News />
            <Board />
        </>
    );
}

export default Main;
