import React from "react";
import "../App.css";
import logoFound from "../assets/notfound.avif";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Notfound = () => {
  return (
    <div>
      <PageTitle title="Not Found Page" />
      <img src={logoFound} alt="" className="not-found" />
      <button className="btn">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};

export default Notfound;
