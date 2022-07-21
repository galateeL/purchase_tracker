import { Route, Routes } from "react-router-dom";
import ItemList from "./pages/ItemList/ItemList";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import "./App.css";
import AddItemForm from "./pages/AddItemForm/AddItemForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/items/add" element={<AddItemForm />} />
      </Routes>
    </div>
  );
}

export default App;
