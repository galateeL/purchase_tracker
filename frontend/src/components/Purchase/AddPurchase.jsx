/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddPurchase.css";

export default function AddPurchase({
  showModal,
  setShow,
  methodAxios,
  urlAxios,
}) {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const handleClose = () => {
    setShow(!showModal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: `${methodAxios}`,
      url: urlAxios,
      data: {
        purchasePrice,
        purchaseDate,
      },
      withCredentials: false,
    })
      .then((res) => res.data)
      .then(() => {
        swal("Achat ajouté").then(() => window.location.reload());
      })
      .catch((err) => {
        swal(`une erreur est survenue ${err}`);
      });
  };
  return (
    <div>
      <Modal
        className="addPurchase-modal"
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton className="close-button">
          <Modal.Title>Ajouter un achat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="text" className="label-add-purchase">
              Date :
              <input
                type="text"
                value={purchaseDate}
                placeholder="aaaa-mm-jj"
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="input-purchase-modal"
              />
            </label>
            <label htmlFor="text" className="label-add-purchase">
              Prix € :
              <input
                type="text"
                value={purchasePrice}
                placeholder="1.5"
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="input-purchase-modal"
              />
            </label>

            <Button variant="primary" type="submit" className="ajouter-achat">
              Ajouter l'achat
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
