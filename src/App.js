import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListConteiner from "./components/ItemListConteiner";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListConteiner />
        <ItemListConteiner />
        <ItemListConteiner />
        <ItemListConteiner />
      </div>
    </>
  );
}

export default App;
