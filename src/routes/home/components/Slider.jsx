import React from 'react';
import Rslider from "react-slick";
import './Slider.scss'
import {Link} from 'react-router-dom';

function Slider({data}) {

    const settings = {
        dots: true,
        autoplay: true,
        className: 'posterSlide',
        dotsClass: 'posterSlide__dots',
        speed: 500,
        arrows: false
    };

    return (
        <Rslider {...settings}>
            {
                data.map((ele, idx) =>
                    <div key={idx}>
                        <Link to="/detail">
                            <img className='posterSlide__img' src={ele.image} alt=""/>
                        </Link>
                    </div>
                )
            }
        </Rslider>
    );
}

export default Slider;