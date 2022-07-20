import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetail.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BiPlus } from "react-icons/bi";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ItemDetail() {
  const [details, setDetails] = useState([]);
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
  }, []);

  return (
    <div id="">
      <div className="">
        <img src={details.image} alt="" />
        <p>{console.error(details.image)}</p>
      </div>
      {/* <img
          src={details`${import.meta.env.VITE_BACKEND_URL}`.image}
          alt=""
        /> */}

      <div className="">
        <h1>{details.name}</h1>
        <div className="data">
          <div className="">Description : {details.description}</div>

          <div className="price">Prix: {details.price}€</div>
          <div className="price">Date: {details.date}</div>
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
