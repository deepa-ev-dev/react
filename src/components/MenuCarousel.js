import React from 'react';
import useMenuCarousel from "../utils/useMenuCarousel";
import { CAROUSEL_IMAGE } from "../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MenuCarousel = () => {
    const imgCarousel = useMenuCarousel();
    const images = imgCarousel?.gridElements?.infoWithStyle?.info;

   
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 5.5,
        swipeToSlide: true
    };
     
    return (
        <div className="">
            <div className="pb-3 px-3 text-2xl font-bold flex justify-between">{imgCarousel?.header.title}
            <div className="flex">
            <button className="rounded-full bg-gray-300 !w-10 h-10 flex items-center justify-center mr-3 focus:outline-none" onClick={previous}>
                        <FontAwesomeIcon icon={faArrowLeft} className="text-gray-700 text-sm" />
                    </button>
                    <button className="rounded-full bg-gray-300 !w-10 h-10 flex items-center justify-center focus:outline-none" onClick={next}>
                        <FontAwesomeIcon icon={faArrowRight} className="text-gray-700 text-sm" />
                    </button>
       
      </div>
      </div>
            
            <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
                {images && images.map((image) => (
                    <div key={image.id} className=" h-[180px]">
                        <div className="flex justify-center items-center">
                            <img src={CAROUSEL_IMAGE + image.imageId} alt={image.accessibility.altText} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MenuCarousel;
