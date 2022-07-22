/* eslint-disable react/prop-types */
import "./Item.css";
import { motion } from "framer-motion";

export default function Item({ item }) {
  const { name, description, image } = item;

  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
          height="300"
          width="327"
          alt=""
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{name}</h1>
          <h2>{description}</h2>
          <p>
            Lorem ipsum dolor sit amet. Et natus voluptatum
            <br />
            sed quasi velit cum dolore vitae vel sint animi
          </p>
        </div>

        <div className="product-price-btn">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
          >
            Read more
          </motion.button>
        </div>
      </div>
    </div>
  );
}
