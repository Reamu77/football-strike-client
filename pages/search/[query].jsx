import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Meta from "../../components/Meta";
import axios from "axios";

const Search = ({ products }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="section">
        {products.length === 0 ? (
          <h3 className="section_title">
            Désole, aucun produit n'a été trouvé...
          </h3>
        ) : (
          <h3 className="section_title">
            <CheckRoundedIcon />
            {products.length} produits trouvés !
          </h3>
        )}
        <ul className="section_products">
          {products.map((product) => (
            <li key={product._id}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Search;

export const getServerSideProps = async ({ params }) => {
  const { data } = await axios.get(
    `https://football-strike-server.vercel.app/search/${params.query}`
  );

  return {
    props: {
      products: data,
    },
  };
};
