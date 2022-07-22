import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { motion } from "framer-motion";
import Chart from "../../components/Chart/Charts";
import AddPurchase from "../../components/Purchase/AddPurchase";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../../components/Navigation/Navigation";

export default function ItemDetail() {
  const [details, setDetails] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setDetails(data);
      })
      .catch((err) => {
        console.warn(err);
      });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items/${id}/purchases`)
      .then((res) => res.data)
      .then((data) => {
        setPurchases(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  function handlePurchase() {
    setShowAdd(true);
  }

  return (
    <div id="item-detail-container">
      <Navigation />
      {showAdd ? (
        <AddPurchase
          showModal={showAdd}
          setShow={setShowAdd}
          methodAxios="post"
          urlAxios={`${import.meta.env.VITE_BACKEND_URL}/items/${id}/purchases`}
        />
      ) : null}

      <h1 className="product-name">{details.name}</h1>
      <div className="produt-description">{details.description}</div>

      <div className="fiche-contenu">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${details.image}`}
          height="100"
          width="300"
          alt=""
          className="item-img"
        />

        <div className="data">
          <div className="product-table">
            <table className="price-table">
              <tr className="tr-table">
                <th>Date</th>
                <th>Prix</th>
              </tr>

              {purchases.map((purchase) => (
                <tr>
                  <td>{new Date(purchase.date).toLocaleDateString()}</td>
                  <td>{purchase.price}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="chart-container">
          <Chart data={purchases} className="chart" />
        </div>
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="new-purchase-button"
          type="button"
          onClick={() => handlePurchase()}
        >
          Ajouter un achat
        </motion.button>
      </div>
    </div>
  );
}
