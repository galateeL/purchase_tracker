import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AddMember({
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
      <Modal className="" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un achat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="text">
              Date :
              <input
                type="text"
                value={purchaseDate}
                placeholder="aaaa-mm-jj"
                onChange={(e) => setPurchaseDate(e.target.value)}
              />
            </label>
            <label htmlFor="text">
              Prix € :
              <input
                type="text"
                value={purchasePrice}
                placeholder="1.5"
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
            </label>

            <Button variant="primary" type="submit">
              Ajouter l'achat
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
AddMember.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  methodAxios: PropTypes.string.isRequired,
  urlAxios: PropTypes.string.isRequired,
};
