import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import ProtectedRoute from "./component/ProtectedRoute";

const App: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    setCart((prevCart) => [...prevCart, id]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((itemID) => itemID !== id));
  };

  const cartCount = cart.length;

  return (
    <>
      <Router>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<ProtectedRoute />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/products"
            element={
              <Products
                // cartCount={cartCount}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                cart={cart}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/:category"
            element={
              <Products
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                cart={cart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
