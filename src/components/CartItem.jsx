import { useContext } from "react";
import { removeItemIcon } from "../assets/assets.config";
import CartContext from "../context/cartContext";
export default function CartItem({
  thumbnail,
  name,
  price,
  quantity,
  orderConfirmed = false,
}) {
  const { cartItems, setCartItems } = useContext(CartContext);
  function handleRemoveItem() {
    setCartItems(cartItems.filter((item) => item.name !== name));
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        <img
          src={thumbnail}
          alt=""
          className={`${!orderConfirmed ? "hidden" : ""} w-12 rounded-md`}
        />
        <div className="space-y-1">
          <b className="block font-semibold text-sm">{name}</b>
          <div className="text-sm">
            <b className="text-Red mr-2">{quantity}x</b>
            <span className="text-Rose-400 mr-2">@ ${price}</span>
            <b className={`text-Rose-500 ${orderConfirmed ? "hidden" : ""}`}>
              ${price * quantity}
            </b>
          </div>
        </div>
      </div>
      {!orderConfirmed ? (
        <button
          onClick={handleRemoveItem}
          type="button"
          aria-label="remove item from the cart"
        >
          <img
            className="h-2 w-2 cursor-pointer ring-2 ring-offset-3 rounded-full text-Rose-400 hover:text-Rose-900  transition-all"
            src={removeItemIcon}
            alt=""
          />
        </button>
      ) : (
        <p className="text-Rose-900 font-semibold text-sm">
          ${price * quantity}
        </p>
      )}
    </div>
  );
}
