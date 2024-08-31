import { useEffect, useState } from "react";
import axios from "axios";
import CardContent from "../component/Card";
import CategoryContent from "../component/Categories";
// import ListProductDetail from "../component/ListProductDetail";
// import Button from "react-bootstrap/Button";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  // onAddToCart: (id: number) => void;
  // onRemoveFromCart: (id: number) => void;
  // cart: number[];
}

interface CategoryProps {
  id: number;
  name: string;
  image: string;
}

interface ProductPageProps {
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cart: number[];
}

// const ProductPage: React.FC<ProductPageProps> = ({
//   onAddToCart,
//   onRemoveFromCart,
//   cart,
// }) => {
//   const [products, setProducts] = useState<ProductPageProps[]>([]);

// return (
//   <div className="container mx-auto p-4">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {products.map((product) => (
//         <CardContent
//           id={product.id}
//           title={product.title}
//           description={product.description}
//           price={product.price}
//           images={product.images}
//           onAddToCart={() => onAddToCart(product.id)}
//           onRemoveFromCart={() => onRemoveFromCart(product.id)}
//           isInCart={cart.includes(product.id)}
//         />
//       ))}
//     </div>
//   </div>
// );

const Products: React.FC<ProductPageProps> = ({
  onAddToCart,
  onRemoveFromCart,
  cart,
}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    // Fetch products
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products: ", err));

    // Fetch categories
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories: ", err));
  }, []);
  console.log({ categories });

  const filterByCategory = (categoryID: number) => {
    const url =
      categoryID === 0
        ? "https://api.escuelajs.co/api/v1/products"
        : `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID}`;

    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching filtered products: ", err));
  };

  const handleGetProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className="flex direction-row margin-left-10 gap-6">
      <div className="flex">
        {/* Render categories */}
        <div className="categories flex direction-col top-20 z-auto">
          <CategoryContent
            title="Categories"
            images=""
            categories={categories}
            filterByCategory={filterByCategory}
          />
          {/* <Button onClick={() => filterByCategory(0)} className="z-10 top-28">
            All Categories
          </Button> */}
        </div>

        {/* Render products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: ProductProps) => (
            <CardContent
              id={product.id}
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              images={product.images[0]}
              onAddToCart={() => onAddToCart(product.id)}
              onRemoveFromCart={() => onRemoveFromCart(product.id)}
              isInCart={cart.includes(product.id)}
            />
          ))}

          {/* Render Product Details */}

          {/* {products.map((product: ProductProps) => (
            <ListProductDetail
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              images={product.images[0]}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
