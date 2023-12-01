import { useState } from "react";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Biscuit", "Bread"]);
  return (
    <>
      <Navbar countCartItems={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClick={() => setCartItems([])}
        onClickToAdd={() => setCartItems([...cartItems, "Biscuit", "Bread"])}
      />
    </>
  );
}

export default App;
