import { useState } from "react";
import Cart from "./components/Cart";
import MainProducs from "./components/MainProducs";
import CartContext from "./context/cartContext";
import useData from "./hooks/useData";
import ConfirmDialog from "./components/ConfirmDialog";
function App() {
  const [data, loading] = useData("./data.json");
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <ConfirmDialog />
      <main
        className={`font-RedHat  text-Rose-900 min-h-screen flex flex-col lg:flex-row pt-4 lg:pt-20  gap-8 ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <MainProducs data={data} loading={loading} />
        <Cart loading={loading} />
      </main>
    </CartContext.Provider>
  );
}

export default App;
