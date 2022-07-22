import "./ItemList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";
import Navigation from "../../components/Navigation/Navigation";

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
    <div>
      <Navigation />
      <div className="item-list-container">
        <div className="title-search-container">
          <h1 className="mes-produits">Mes produits</h1>
          <div className="filter">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>

        <div className="wj-item-list">
          {items
            .filter((item) =>
              searchValue === ""
                ? true
                : item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Link to={`/${item.id}`}>
                <Item item={item} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
