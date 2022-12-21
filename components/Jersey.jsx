import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./Card";

const Jersey = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/product/");
      setProducts(
        data.filter(
          (product) => data.indexOf(product) < 5 && product.category == "jersey"
        )
      );
    };
    fetchProducts();
  }, []);

  return (
    <div className="section">
      <h3 className="section_title">
        <Link href={"/category/jersey"}>DERNIERS MAILLOTS</Link>
      </h3>
      <ul className="section_products">
        {products.map((product) => (
          <li key={product.title}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jersey;
