import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}
function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, [id]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    product && (
      <div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-64 object-contain h-64 rounded-md mb-4 md:mb-0"
            />
            <p className="text-2xl font-bold mb-3">{product.title}</p>
            <p className="text-lg text-gray-800 mb-4">${product.price}</p>
            <p className="text-gray-800">{product.description}</p>
            <Button variant="primary">Add to Cart</Button>
            <Button variant="primary" onClick={handleBack}>
              Back
            </Button>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
