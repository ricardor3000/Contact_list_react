import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React ContactList</span>
      </Link>
      <div className="ml-auto">
        <Link to="/contactos">
          <button className="btn btn-primary">Ir a lista de Contactos</button>
        </Link>
      </div>
    </nav>
  );
};
