import { NavLink } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCarrot } from "react-icons/fa";
import LogoMobile from "../../assets/logo-purchasetracker-version3.png";

import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <nav className="nav">
        <div className="first-container-nav">
          <img
            src={LogoMobile}
            alt="purchase tracker"
            className="purchase-tracker-logo-Mobile"
          />

          <div className="icons-container">
            <NavLink to="/">
              <BiHomeSmile className="icon-nav" />
            </NavLink>
            <NavLink to="/items">
              <FaCarrot className="icon-nav" />
            </NavLink>
            <NavLink to="/items/add">
              <AiOutlinePlusCircle className="icon-nav" />
            </NavLink>
          </div>
          <div className="titles-container">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <h1 className="title-nav">HOME</h1>
            </NavLink>
            <NavLink to="/items" style={{ textDecoration: "none" }}>
              <h1 className="title-nav">MES PRODUITS</h1>
            </NavLink>
            <NavLink to="/items/add" style={{ textDecoration: "none" }}>
              <h1 className="title-nav">AJOUTER UN PRODUIT</h1>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
