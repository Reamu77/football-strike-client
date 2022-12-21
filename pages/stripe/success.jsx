import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const success = () => {
  return (
    <>
      <Meta />
      <Header />
      <div className="page">
        <h3>
          Votre commande est cours de traitement, vous allez recevoir un email
          de confirmation. <br />
          <br />
          Merci pour votre confiance.
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default success;
