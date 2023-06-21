import React, { ReactElement } from "react";
import { useSwiper } from "swiper/react";
import{faAnglesRight, faAnglesLeft} from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SlideNextButton():ReactElement {
    const swiper = useSwiper();

    return <button className="next_btn" onClick={():void => swiper.slideNext()}><FontAwesomeIcon icon={faAnglesRight} /></button>;
}
export function SlidePrevButton():ReactElement {
    const swiper = useSwiper();

    return <button className="prev_btn" onClick={():void => swiper.slidePrev()}><FontAwesomeIcon icon={faAnglesLeft} /></button>;
}
