import * as React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

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
    <div>
      <h1>Ajouter un nouvel article</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
        <label htmlFor="name">
          Nom de l'article
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
        </label>
        <label htmlFor="description">
          Description
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="label-file" htmlFor="file">
          Image
          <input
            id="file"
            type="file"
            name="image"
            multiple
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit">Ajouter l'article</button>
      </form>
    </div>
  );
}
