import CharacterList from "./components/characterList/characterList";
import characters from "./components/charactersData/charactersData";
import NavBar from "./components/navBar/navBar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/home.jsx";
import { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/tienda"
          element={
            <Header
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

return (
  <>
    <NavBar />
    <Header
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    />
    <ProductList
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
    />
  </>
);

export default App;
