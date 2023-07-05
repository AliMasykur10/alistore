import { Routes, Route } from "react-router-dom";
import Navbar from "./components/template/navbar/Navbar";
import Footer from "./components/template/footer/Footer";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Description />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
