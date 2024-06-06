import React from "react";
import Avatar from "../../img/Avatar.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>PROYECTO CONTACTLIST FINAL 4GEEKS</h1>
    <p>
      <img src={Avatar} />
    </p>
    <Link to="/addcontact">
      <button className="btn btn-primary">Ir a lista de Contactos</button>
    </Link>
  </div>
);
