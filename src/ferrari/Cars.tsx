import React from "react";
import mdata from "./data/mdata";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import './css/cars.css';
import { useLocation } from "react-router-dom";

type bgc_type={
    bgc : string;
}

const StyledDiv = styled.div<bgc_type>`
    background-color : ${(props) => props.bgc}
`
const Cars = (props:bgc_type) => {
    const car = useLocation();
    const cidx = car.state.cidx-1;
    let idx = cidx;
    return(
        <>
            <StyledDiv bgc={mdata[idx].bgc} className="c_vid_wrap">
                <video src={mdata[idx].cvid[0]} muted={true} autoPlay={true} loop={true} />
                <h3 className="slogan">{mdata[idx].slo}</h3>
                <img className="c_logo" src={mdata[idx].logo} alt=" " />
            </StyledDiv>
            <StyledDiv bgc={mdata[idx].bgc} className="c_sum_wrap">
                <img src={mdata[idx].psrc[0]} alt=" "/>
                <div className="c_sum_container">
                    <h3 className="c_name">{mdata[idx].name.toUpperCase()}</h3>
                    <p className="c_sum">{mdata[idx].csum}</p>
                </div>
            </StyledDiv>
            <StyledDiv bgc={mdata[idx].bgc} className="c_img_wrap">
                <Swiper 
                    slidesPerView={1.2}
                    allowTouchMove={true}
                    breakpoints={{
                        1200:{
                            slidesPerView:2,
                            spaceBetween:0
                        }
                    }}
                >
                    <SwiperSlide>
                        <img src={mdata[idx].psrc[1]} alt=" "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mdata[idx].psrc[2]} alt=" "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mdata[idx].psrc[3]} alt=" "/>
                    </SwiperSlide>
                </Swiper>
            </StyledDiv>
            <StyledDiv bgc={mdata[idx].bgc} className="c_per_wrap">
                <div className="c_per_container">
                    <ul className="c_per">
                        <li>{mdata[idx].cper.eng}<span className="st">engine</span></li>
                        <li>{mdata[idx].cper.hp} HP<span className="st">horse power</span></li>
                        {
                            mdata[idx].cper.zero && 
                            <li>{mdata[idx].cper.zero}s<span className="st">zero to sixty</span></li>
                        }
                    </ul>
                    <p className="c_per_sum">{mdata[idx].cper.psum}</p>
                </div>
                {
                    mdata[idx].cvid[1] &&
                    <video src={mdata[idx].cvid[1]} autoPlay={true} muted={true} />
                }
            </StyledDiv>
            <div className="c_des_wrap">
                <img src={mdata[idx].psrc[4]} alt=" "/>
                <h3 className="c_des">{mdata[idx].cdes}</h3>
            </div>
            <StyledDiv bgc={mdata[idx].bgc} className="c_part_wrap">
                <h3 className="c_part_tit">파트너</h3>
                <ul className="c_part_list">
                    {
                        mdata[idx].part.map((v,i)=>{
                            return (
                                <li key={i}><span>{v}</span></li>
                            )
                        })
                    }
                </ul>
            </StyledDiv>
        </>
    )
}

export default Cars;