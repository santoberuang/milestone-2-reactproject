import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import TableCart from "../component/TableCart";

interface ProductValue {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface CartValues {
  cart: number[];
  setCart: (cart: number[]) => void;
}

const Cart: React.FC<CartValues> = ({ cart, setCart }) => {
  const [product, setProduct] = useState<ProductValue[]>([]);
  //   const [cartClear, setCartClear] = useState<ProductValue[]>([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  const cartItems = product.filter((product) => cart.includes(product.id));
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <TableCart
      cartItems={cartItems}
      totalPrice={totalPrice}
      onClearCart={clearCart}
    />
  );
};

export default Cart;
