import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Product />
    </div>
  );
}

export default App;
