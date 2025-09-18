import { useContext } from "react";
import {
  addToCartIcon,
  incrementIcon,
  decrementIcon,
} from "../assets/assets.config";
import CartContext from "../context/cartContext";
function Meal({ thumbnail, mobile, tablet, desktop, name, category, price }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const item = cartItems.find((item) => item.name === name);
  const quantity = item ? item.quantity : 0;

  function handleIncrement() {
    if (quantity == 0) {
      setCartItems([
        ...cartItems,
        {
          thumbnail: thumbnail,
          name: name,
          price: price,
          quantity: quantity + 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, quantity: quantity + 1 } : item
        )
      );
    }
  }
  function handleDecrement() {
    if (quantity == 1) {
      setCartItems(cartItems.filter((item) => item.name != name));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, quantity: quantity - 1 } : item
        )
      );
    }
  }
  return (
    <div className="relative flex flex-col ">
      <figure className="relative ">
        <picture>
          <source media="(min-width:768px )" srcSet={tablet} />
          <source media="(min-width:1024px )" srcSet={desktop} />
          <img
            className={`w-full rounded-lg object-cover ${
              quantity ? "outline-3 " : ""
            }  outline-Red`}
            src={mobile}
            alt=""
          />
        </picture>

        {!quantity ? (
          <button
            onClick={handleIncrement}
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -bottom-5  mx-auto w-[40%] lg:w-[60%] flex items-center justify-center gap-2 rounded-full border border-Rose-300 bg-white hover:border-Red hover:text-Red py-3 text-sm font-semibold text-Rose-900 shadow-sm cursor-pointer focus-visible:outline-3  focus-visible:outline-Rose-900  transition-all"
          >
            <img className="h-4 w-4" src={addToCartIcon} alt="" />
            Add to Cart
          </button>
        ) : (
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-5  mx-auto w-[40%] lg:w-[60%] flex items-center justify-around  rounded-full border border-Red bg-Red py-3 text-sm font-semibold text-Rose-900 shadow-sm ">
            <button
              onClick={handleDecrement}
              aria-label="to decrement quantity"
              type="button"
              className="cursor-pointer group hover:bg-white border-2 h-4 w-4 flex justify-center items-center   border-white rounded-full transition-all"
            >
              <img
                className="h-2 w-2 group-hover:invert-100"
                src={decrementIcon}
                alt=""
              />
            </button>
            <span className=" text-ellipsis overflow-hidden w-10 text-center text-white">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              aria-label="to increment quantity"
              type="button"
              className="cursor-pointer group hover:bg-white border-2 h-4 w-4 flex justify-center items-center   border-white rounded-full transition-all"
            >
              <img
                className="h-2 w-2 group-hover:invert-100"
                src={incrementIcon}
                alt=""
              />
            </button>
          </span>
        )}
      </figure>
      <div className="meal-info mt-6 flex flex-col gap-1">
        <p className="text-Rose-500 text-sm">{category}</p>
        <b className="block font-semibold leading-snug">{name}</b>
        <strong className="text-Red font-semibold">${price}</strong>
      </div>
    </div>
  );
}

export default Meal;
