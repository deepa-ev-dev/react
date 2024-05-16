import { useState, useEffect } from "react";
import MOCK_DATA from "../components/mockData/resList.json";

const useMenuCarousel = () => {
    const [imgCarousel, setImgCarousel] = useState(null); // Set initial value to null

    useEffect(() => {
      const fetchImage = async () => {
        try {
          // Directly access the properties of the imported JSON object
          const json = MOCK_DATA;
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
