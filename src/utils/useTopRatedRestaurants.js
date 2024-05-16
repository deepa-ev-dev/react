import { useEffect, useState } from "react";
import MOCK_DATA from "../components/mockData/resList.json";

const useTopRatedRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Simulating asynchronous behavior with a timeout
            setTimeout(() => {
                // Use mock data instead of fetching from an API
                const restaurants = MOCK_DATA?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setListOfRestaurants(restaurants);
                setFilteredRestaurant(restaurants);
                setLoading(false);
            }, 1000); // Simulate 1 second delay
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    return { listOfRestaurants, filteredRestaurant, loading };
};

export default useTopRatedRestaurants;
