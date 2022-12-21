import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Address from "../../components/Address";
import Meta from "../../components/Meta";
import axios from "axios";

const Product = ({ product }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="product">
        <div className="product_info">
          <h1 className="product_title">{product.title} (Version Player)</h1>
          <img
            className="product_img"
            src={product.image_url}
            alt={product.title}
          />
          <div className="product_size">
            <h4>Tailles disponibles :</h4>
            {product.sizes.map((size) => (
              <span key={size}>{size}, </span>
            ))}
          </div>
        </div>
        <Address product={product} category={product.category} />
      </div>

      <Footer />
    </>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const { data } = await axios.get(process.env.SERVER_URL);

  const paths = data.map((product) => ({
    params: {
      slug: product._id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `https://football-strike-server.vercel.app/${params.slug}`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
      revalidates: 60, // Update the cached version of the page every 60 seconds
    },
  };
};
