import { useContext } from "react";
import { orderConfirmedIcon } from "../assets/assets.config";
import Button from "./Button";
import CartItem from "./CartItem";
import TotalPriceSection from "./TotalPriceSection";
import CartContext from "../context/cartContext";

export default function ConfirmDialog() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const cartLength = cartItems.length;
  const totalPrice = cartLength
    ? cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    : 0;
  function handleClose() {
    document.querySelector("dialog").close();
    document.querySelector(".dialog-backdrop").hidden = true;

    setCartItems([]);
  }

  return (
    <>
      <div
        className="dialog-backdrop z-200 fixed w-full h-full bg-gray-400 opacity-50"
        hidden
      ></div>
      <dialog className=" z-1000 bottom-0 fixed  rounded-t-2xl bg-white p-6 shadow-2xl sm:mx-auto lg:top-1/2 lg:-translate-y-1/2 lg:w-[37rem] lg:p-10 lg:rounded-[10px] transition-all">
        <section className="flex gap-3 flex-col">
          <img src={orderConfirmedIcon} alt="" className=" w-12 " />
          <div className="messages space-y-1 flex-col">
            <strong className="block text-Rose-900 text-[2.5rem]/tight font-bold">
              Order Confirmed
            </strong>
            <p className="text-Rose-500 ">We hope you enjoy your food!</p>
          </div>
        </section>
        <section className="confirmedItems my-4 lg:my-8 bg-Rose-50 rounded-lg p-4  space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.name}
              thumbnail={item.thumbnail}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              orderConfirmed={true}
            />
          ))}
          <hr className=" border-Rose-100" />
          <TotalPriceSection finalPrice={totalPrice} />
        </section>
        <Button text="Start New Order" onClickHandle={handleClose} />
      </dialog>
    </>
  );
}
