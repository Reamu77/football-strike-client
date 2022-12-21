import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const cancel = () => {
  return (
    <>
      <Meta />
      <Header />
      <div className="page">
        <h3>
          Votre commande a malheureusement été annulée, vous ne serez donc pas
          débité. <br />
          <br />
          Merci pour votre confiance.
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default cancel;
