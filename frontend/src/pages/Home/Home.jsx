import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LogoHome from "../../assets/logo-purchasetracker-version2.png";

export default function Home() {
  return (
    <div className="Homecontainer">
      <div>
        <motion.div
          initial={{ opacity: 0, y: "-100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="bienvenue">
            Suivi des prix <br />
            des dépenses courantes
          </h1>

          <img
            src={LogoHome}
            alt="purchase-tracker"
            className="purchase-tracker-home"
          />
        </motion.div>
      </div>
      <Link to="/items">
        <div id="enter-button">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Entrer
          </motion.button>
        </div>
      </Link>
    </div>
  );
}
