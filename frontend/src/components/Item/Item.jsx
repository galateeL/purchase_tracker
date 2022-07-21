/* eslint-disable react/prop-types */
import "./Item.css";

export default function Item({ item }) {
  const { name, description, image } = item;

  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
          height="420"
          width="327"
          alt=""
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name}</h1>
          <h2>{description}</h2>
          <p>
            Harvest Vases are a reinterpretation
            <br /> of peeled fruits and vegetables as
            <br /> functional objects. The surfaces
            <br /> appear to be sliced and pulled aside,
            <br /> allowing room for growth.{" "}
          </p>
        </div>

        <div className="product-price-btn">
          <button type="button">Read more</button>
        </div>
      </div>
    </div>
  );
}
