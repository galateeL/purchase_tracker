import * as React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./AddItemForm.css";
import { motion } from "framer-motion";
import Flower from "../../assets/flower.gif";
import Navigation from "../../components/Navigation/Navigation";

export default function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.files[0];
    setImage(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/items`, formData, {
        withCredentials: false,
      })
      .then((res) => res.data)
      .then(() => {
        swal("Article ajouté avec succès !").then(() =>
          window.location.reload()
        );
      })
      .catch((err) => {
        swal(`une erreur est survenue ${err}`);
      });
  };

  return (
    <div className="AddFormContainer">
      <Navigation />
      <h1 className="addFormTitle">Ajouter un nouvel article</h1>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
        className="AddForm"
      >
        <label htmlFor="name" className="labelForm">
          Nom de l'article
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </label>
        <label htmlFor="description" className="labelForm">
          Description
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="file" className="labelForm">
          <input
            id="file"
            type="file"
            name="image"
            multiple
            onChange={(e) => handleChange(e)}
          />
        </label>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="addButton"
        >
          Ajouter l'article
        </motion.button>
        <img src={Flower} alt="" width="200" className="plant1" />
      </form>
    </div>
  );
}
