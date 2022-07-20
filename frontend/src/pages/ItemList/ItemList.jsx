import "./ItemList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items`)
      .then((res) => res.data)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div id="">
      <h1>Mes produits</h1>
      <div className="filter">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="wj-item-list">
        {console.error(items)}
        {items
          .filter((item) =>
            searchValue === "" ? true : item.name.includes(searchValue)
          )
          .map((item) => (
            <Link to={`items/${item.id}`}>
              <Item item={item} />
            </Link>
          ))}
      </div>
    </div>
  );
}
