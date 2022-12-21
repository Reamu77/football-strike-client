import axios from "axios";
import { useState, useEffect } from "react";

const Address = ({ product }) => {
  const handleCheckout = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `https://football-strike-server.vercel.app/adress`,
      {
        product_name: product.title,
        size: e.target["size"].value,
        firstname: e.target["firstname"].value,
        lastname: e.target["lastname"].value,
        address: e.target["address"].value,
        city: e.target["city"].value,
        zip: e.target["zip"].value,
        country: e.target["country"].value,
        department: e.target["department"].value,
      }
    );

    if (data) {
      const res = await axios.post(
        "https://football-strike-server.vercel.app/api/product/stripe/jersey"
      );

      window.location.href = res.data.url;
    }
  };

  const [crossedPrice, setCrossedPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  useEffect(() => {
    switch (product.category) {
      case "jersey":
        setCrossedPrice("99€");
        setFinalPrice("55€");
        break;
      case "tracksuits":
        setCrossedPrice("129");
        setFinalPrice("90€");
        break;
    }
  });

  return (
    <form className="order_credentials" onSubmit={(e) => handleCheckout(e)}>
      <label className="credentials_label">
        Prénom :
        <input
          type="text"
          required={true}
          name="firstname"
          placeholder="votre prénom"
          minLength="1"
          maxLength="32"
        />
      </label>
      <label className="credentials_label">
        Nom :
        <input
          type="text"
          required={true}
          name="lastname"
          placeholder="votre nom de famille"
          minLength="1"
          maxLength="32"
        />
      </label>
      <label className="credentials_label">
        Adresse :
        <input
          type="text"
          required={true}
          name="address"
          placeholder="l'adresse de livraison"
          minLength="3"
          maxLength="128"
        />
      </label>
      <label className="credentials_label">
        Ville :
        <input
          type="text"
          required={true}
          name="city"
          placeholder="la ville où livrer le produit"
          minLength="2"
          maxLength="128"
        />
      </label>
      <label className="credentials_label">
        Pays :
        <input
          type="text"
          required={true}
          name="country"
          placeholder="pays où livrer le produit"
          minLength="1"
          maxLength="100"
        />
      </label>
      <label className="credentials_label">
        Département :
        <input
          type="text"
          required={true}
          name="department"
          placeholder="département où livrer le produit"
          minLength="1"
          maxLength="100"
        />
      </label>
      <label className="credentials_label">
        Code Postal :
        <input
          type="text"
          required={true}
          name="zip"
          placeholder="le code postal correspondant"
          minLength="2"
          maxLength="10"
        />
      </label>
      <label>
        <div className="size_price">
          <div className="size">
            Taille :{" "}
            <select name="size">
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div>
            Prix : <s style={{ color: "red" }}>{crossedPrice}</s>{" "}
            <span style={{ color: "lime" }}>{finalPrice}</span>
          </div>
        </div>
      </label>
      <input type="submit" value="Passer commande !" />
    </form>
  );
};

export default Address;
