import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetail.css";
import { BiPlus } from "react-icons/bi";
import Chart from "../../components/Chart/Charts";
import AddPurchase from "../../components/Purchase/AddPurchase";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div id="">
      {showAdd ? (
        <AddPurchase
          showModal={showAdd}
          setShow={setShowAdd}
          methodAxios="post"
          urlAxios={`${import.meta.env.VITE_BACKEND_URL}/items/:id/purchases`}
        />
      ) : null}

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
        <Chart data={purchases} />
      </div>
      <div>
        Ajouter un achat pour ce produit
        <Link to="/items/add">
          <BiPlus className="plus" />
        </Link>
        <button
          className="newButtonMember"
          type="button"
          onClick={() => handlePurchase()}
        >
          Ajouter un achat
        </button>
      </div>
    </div>
  );
}
