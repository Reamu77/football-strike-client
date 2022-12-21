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
          (product) =>
            data.indexOf(product) < 5 && product.category == "tracksuits"
        )
      );
    };
    fetchProducts();
  }, []);

  return (
    <div className="category">
      <Meta />
      <Header />
      <div className="section">
        <h2 className="section_title">NOS SURVETEMENTS</h2>
        <ul className="section_products">
          {products.map((product) => (
            <li key={product.title}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default jersey;
