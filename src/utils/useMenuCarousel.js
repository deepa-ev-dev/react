import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";

const useMenuCarousel = () => {
    const [imgCarousel, setImgCarousel] = useState();

    useEffect(() => {
      fetchImage();
    },[]);

    const fetchImage = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();

        setImgCarousel(json.data.cards[0].card.card);


    };
    return imgCarousel;

    
};

export default useMenuCarousel;