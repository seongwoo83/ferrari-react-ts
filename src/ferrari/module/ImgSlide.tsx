import $ from 'jquery'
import { useEffect } from 'react';
import article_data from '../data/ardata';
import '../css/imgslide.css';

function ImgSlide(props : {idx:number}) {
    useEffect(()=>{
        let slideImg = $(".img_slide li");
        slideImg.each(function (idx, ele) {
            $(ele).css({
                left: 30 * idx + "px",
                top: 30 * idx + "px",
                zIndex: -idx + slideImg.length+1,
            });
        });

        let slideImgBx = $(".img_slide");

        slideImgBx.find("li").on("click", function () {
            if ($(this).index() === 0) {
                $(this).animate(
                    {
                        top: "-50px",
                        left: "-50px",
                        opacity: "0",
                    },
                    400,
                    () => {
                        $(this).parent().append($(this));
                        slideImg = $(".img_slide li");
                        slideImg
                            .each(function (idx, ele) {
                                $(ele).animate(
                                    {
                                        left: 30 * idx + "px",
                                        top: 30 * idx + "px",
                                        zIndex: -idx + slideImg.length+1,
                                    },
                                    100
                                );
                            })
                            .last()
                            .animate({
                                opacity: "1",
                            });
                    }
                );
            } else return;
        });
    })

    return(
        <>
            <ul className='img_slide'>
                            <>
                            {
                                article_data[props.idx-1].rsrc.map((v,i)=>{
                                    return (
                                    <li key={i}><img src={v} alt='slide_img'/></li>
                                    )
                                })
                            }
                            </>
            </ul>
        </>
    )
}

export default ImgSlide;
