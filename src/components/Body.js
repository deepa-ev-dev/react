import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import MenuCarousel from "./MenuCarousel";
import TopRatedRestaurants from "./TopRatedRestaurants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [title, setTitle] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTitle(json?.data?.cards[2]?.card?.card?.title);
    setLoading(false);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection;</h1>
    );

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
    setSearchClicked(true);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) :  (
    <div className="mx-20">
      <div className="search m-4 p-4 text-center">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      

      <div className="mx-[5.5rem]">
      <MenuCarousel />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <TopRatedRestaurants />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="pb-3 px-3 text-2xl font-bold">{title}</div>
        <div className="grid grid-cols-4 gap-4 justify-center">
          {filteredRestaurant.map((restaurant, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Body;
