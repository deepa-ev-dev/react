import React, { useState, useRef } from "react";
import useTopRatedRestaurants from "../utils/useTopRatedRestaurants";
import RestaurantCard from "./RestaurantCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopRatedRestaurantsPage = () => {
  const { filteredRestaurant } = useTopRatedRestaurants();
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);

  // Settings for the slider
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4, // Adjust the number of slides shown per view
    swipeToSlide: true,
  };

  const next = () => {
    sliderRef.current.slickNext(); // Access slickNext through the current property
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Access slickPrev through the current property
  };

  return (
    <div className="">
      <div className="pb-3 px-3 text-2xl font-bold flex justify-between">
        Top restaurant chains in Chennai
        <div className="flex">
          <button className="rounded-full bg-gray-300 !w-10 h-10 flex items-center justify-center mr-3 focus:outline-none" onClick={previous}>
            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-700 text-sm" />
          </button>
          <button className="rounded-full bg-gray-300 !w-10 h-10 flex items-center justify-center focus:outline-none" onClick={next}>
            <FontAwesomeIcon icon={faArrowRight} className="text-gray-700 text-sm" />
          </button>
        </div>
      </div>
      {/* Render the slider */}
      <Slider ref={sliderRef} {...settings}>
        {/* Render the filtered restaurants using RestaurantCard inside each slider item */}
        {filteredRestaurant.map((restaurant) => (
          <div key={restaurant?.info.id} className="mx-2"> {/* Add margin for gap between images */}
            <Link to={"/restaurants/" + restaurant?.info.id}>
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopRatedRestaurantsPage;
