import { carbonIcon, emptyCartIcon } from "../assets/assets.config";
import CartItem from "./CartItem";
import TotalPriceSection from "./TotalPriceSection";
import Button from "./Button";
import { Fragment, useContext } from "react";
import CartContext from "../context/cartContext";
export default function Cart({ loading }) {
  const { cartItems } = useContext(CartContext);
  const cartLength = cartItems.length;
  const cartItemsLength = cartLength
    ? cartItems.reduce((result, item) => result + item.quantity, 0)
    : 0;
  const totalPrice = cartLength
    ? cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    : 0;

  function handleShow() {
    if (innerWidth >= 1024) {
      document.querySelector("dialog").showModal();
    } else {
      document.querySelector(".dialog-backdrop").hidden = false;
      document.querySelector("dialog").show();
    }
  }
  if (!loading) {
    return (
      <aside className="cart-section mx-auto w-85 lg:w-96 mt-12 p-4 lg:ml-0  md:p-6 h-fit lg:mt-2 rounded-xl bg-white space-y-6">
        <h3 className="text-xl font-bold text-Red">
          Your Cart ({cartItemsLength})
        </h3>
        {cartLength ? (
          <>
            <section className="cart__items mt-2 space-y-4 ">
              {cartItems.map((item) => (
                <Fragment key={item.name}>
                  <CartItem
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                  <hr className="text-Rose-100" />
                </Fragment>
              ))}
              <TotalPriceSection finalPrice={totalPrice} />
            </section>
            <div className="carbon-message flex justify-center items-center gap-1 rounded-lg bg-Rose-100 py-4">
              <img src={carbonIcon} alt="" />
              <p className="text-sm text-Rose-900">
                This is a <b>carbon-neutral</b> delivery
              </p>
            </div>
            <Button text="Confirm Order" onClickHandle={handleShow} />
          </>
        ) : (
          <section className="cart__items mt-2 space-y-4 flex flex-col items-center">
            <img src={emptyCartIcon} alt="" />
            <p className=" font-semibold text-Rose-500">
              Your added items will appear here
            </p>
          </section>
        )}
      </aside>
    );
  } else {
    return (
      <aside className="cart-section mx-auto w-85 lg:w-96 mt-12 p-4 lg:ml-0  md:p-6 h-fit lg:mt-2 rounded-xl bg-gray-300 space-y-6">
        <h3 className="text-xl font-bold text-gray-200 bg-gray-200 w-fit rounded-lg">
          Your Cart ({cartItemsLength})
        </h3>
        <section className="cart__items mt-2 space-y-4 flex flex-col items-center">
          <div className="bg-gray-200 text-gray-200 rounded-lg w-32 h-32" />
          <p className=" font-semibold text-gray-200 bg-gray-200 rounded-lg">
            Your added items will appear here
          </p>
        </section>
      </aside>
    );
  }
}
