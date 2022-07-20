import { Route, Routes } from "react-router-dom";
import ItemList from "./pages/ItemList/ItemList";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
