import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";

const useMenuCarousel = () => {
    const [imgCarousel, setImgCarousel] = useState(null); // Set initial value to null

    useEffect(() => {
      const fetchImage = async () => {
        try {
          const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          if (!data.ok) {
            throw new Error("Failed to fetch data");
          }
          const json = await data.json();
          setImgCarousel(json.data.cards[0].card.card);
        } catch (error) {
          console.error("Error fetching image carousel data:", error);
          // Handle error gracefully
        }
      };

      fetchImage();
    }, []);

    return imgCarousel;
};

export default useMenuCarousel;
