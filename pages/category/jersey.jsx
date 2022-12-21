import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const jersey = () => {
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
    <>
      <Meta />
      <Header />
      <div className="section">
        <h2 className="section_title">TOUS NOS MAILLOTS</h2>
        <ul className="section_products">
          {products.map((product) => (
            <li key={product.title}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default jersey;
