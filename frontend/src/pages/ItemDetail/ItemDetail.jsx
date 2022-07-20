import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

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
      </div>

      <div className="">
        <h1>{details.name}</h1>

        <div className="data">
          <div className="">Description : {details.description}</div>

          <div className="price">Prix: {details.price}€</div>
          <div className="price">Date: {details.date}</div>
        </div>

        <div className="center" />
      </div>
    </div>
  );
}
