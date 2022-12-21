import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

const mystery = () => {
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [crossedPrice, setCrossedPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [category, setCategory] = useState("mystery");

  useEffect(() => {
    switch (category) {
      case "mystery":
        setCrossedPrice("");
        setFinalPrice("130€");
        break;
      case "mystery_jersey":
        setCrossedPrice("");
        setFinalPrice("50€");
        break;
      case "mystery_tracksuits":
        setCrossedPrice("");
        setFinalPrice("80€");
        break;
    }
  }, [category]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `https://football-strike-server.vercel.app/adress`,
      {
        product_name: category,
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
        process.env.SERVER_URL + "/stripe/" + category
      );

      window.location.href = res.data.url;
    }
  };

  return (
    <>
      <Meta />
      <Header />
      <main className="page">
        <h2>COLIS MYSTERE</h2>
        <p>Séléctionnez l'offre qui vous intéresse :</p>
        <form className="mystery_form">
          <br />
          <label htmlFor="maillot">
            <input
              type="radio"
              id="maillot"
              name="mystery"
              value="maillot"
              onClick={() => setCategory("mystery_jersey")}
            />
            UN MAILLOT ALEATOIRE
          </label>
          <br />
          <label htmlFor="survetement">
            <input
              type="radio"
              id="survetement"
              name="mystery"
              value="survetement"
              onClick={() => setCategory("mystery_tracksuits")}
            />
            UN SURVETEMENT ALEATOIRE
          </label>
          <br />
          <label htmlFor="mystere">
            <input
              type="radio"
              id="mystere"
              name="mystery"
              value="mystere"
              defaultChecked={true}
              onClick={() => setCategory("mystery")}
            />
            UN COLIS ALEATOIRE <br />
            (MAILLOT + SURVETEMENT)
          </label>
        </form>
        <br />
        <br />
        <br />
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
                  {sizes.map((size) => (
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
      </main>
      <Footer />
    </>
  );
};

export default mystery;
