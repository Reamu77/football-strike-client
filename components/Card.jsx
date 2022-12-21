import Link from "next/link";

const Card = ({ product }) => {
  return (
    <Link href={`/${product._id}`}>
      <div className="card">
        <img
          className="card_image"
          src={product.image_url}
          alt={product.title}
        />
        <h3 className="card_title">{product.title}</h3>
      </div>
    </Link>
  );
};

export default Card;
