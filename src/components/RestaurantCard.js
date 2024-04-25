import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";



const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    aggregatedDiscountInfoV3,
    sla,
    locality
  } = resData;

  return (
    <div className="restaurant-card transition-transform transform hover:scale-95">
      <div className="image-container relative w-[203px] h-[135px]">
  <img className="overflow-hidden object-cover rounded-2xl w-full h-full" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
  <div className="rounded-b-2xl font-bold discount-info absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-2">
    <span className="font-semibold">
      {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
    </span>
  </div>
</div>

      <div className="details p-4">
        <h3 className="text-lg font-semibold text-[18px] leading-6 text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">{name}</h3>
        <div className="rating flex items-center text-lg leading-[19px] ">
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />



          <span className="text-green-600">{avgRating}</span>
          <span className="mx-1">•</span>
          <span>{sla.slaString}</span>
        </div>
        <p className="cuisines text-base leading-[19px] font-light text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis">
  {cuisines.join(", ")}
</p>

        <p className="locality text-base leading-[19px] font-light text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis ">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
