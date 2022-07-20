import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetail.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BiPlus } from "react-icons/bi";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ItemDetail() {
  const [details, setDetails] = useState([]);
  const [purchases, setPurchases] = useState([]);
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

  return (
    <div id="">
      <div className="">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${details.image}`}
          alt=""
          width="100"
        />
      </div>
      <div className="">
        <h1>{details.name}</h1>
        <div className="data">
          <div className="">Description : {details.description}</div>
          <div>
            <table>
              <tr>
                <th>Date</th>
                <th>Prix</th>
              </tr>

              {purchases.map((purchase) => (
                <tr>
                  <td>{purchase.date}</td>
                  <td>{purchase.price}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="center" />
        Graph
      </div>
      <div>
        Ajouter un achat pour ce produit
        <Link to="/items/add">
          <BiPlus className="plus" />
        </Link>
      </div>
    </div>
  );
}
