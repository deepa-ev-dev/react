import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { addItem, removeItem, incrementItemQuantity, decrementItemQuantity } from "../utils/cartSlice";

const CartItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  var totalCartPrice = 0;

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleIncrementQuantity = (item) => {
    dispatch(incrementItemQuantity(item.card.info.id));
  };

  const handleDecrementQuantity = (item) => {
    dispatch(decrementItemQuantity(item.card.info.id));
  };

    // Calculate total cart price
    items.forEach(item => {
      totalCartPrice += (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100) * item.quantity;
    });
  

  return (
    <div>
      {items.map((item) => (
     
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                {" "} - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              
            </div>
           
            <p className="text-sm pb-4">{item.card.info.description}</p>
            <div className="border w-[85px]">
              <button
                className="p-3 font-bold"
                onClick={() => handleDecrementQuantity(item)}
              >
                -
              </button>
              <span> {item.quantity}</span> {/* Display item quantity */}
              <button
                className="p-3 font-bold "
                onClick={() => handleIncrementQuantity(item)}
              >
                +
              </button>
             
            </div>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute top-0 right-0">
              <button
                className="p-2 px-[13px] rounded-full bg-red-500 text-white shadow-lg"
                onClick={() => handleRemoveItem(item)}
              >
       <FontAwesomeIcon icon={faTrash} /> 
              </button>
            </div>
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="h-28 object-cover aspect-auto rounded-lg w-[156px]"
              />
            )}
            
          </div>

        
          
        </div>
        
      ))}
       <div className="text-right pr-4">
        <p className="font-bold">Total Amount: ₹{totalCartPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItemList;
