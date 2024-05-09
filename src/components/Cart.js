import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                {cartItems.length === 0 ? (
                    <div>
                        <p className="font-bold text-lg text-black">Your cart is empty</p>
                        <p>You can go to the home page to view more restaurants</p>
                        <button className="p-2 px-4 font-bold my-10 m-2 bg-[#fc8019] text-white">
                            <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
                        </button>
                    </div>
                ) : (
                    <CartItemList items={cartItems} />
                )}
            </div>
        </div>
    );
};

export default Cart;
