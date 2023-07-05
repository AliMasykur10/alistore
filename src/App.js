import { Routes, Route } from "react-router-dom";
import Navbar from "./components/template/navbar/Navbar";
import Footer from "./components/template/footer/Footer";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import Cart from "./pages/cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div className=" min-h-screen max-w-screen flex justify-center items-center gap-3 ">
      <box-icon name="loader-alt" animation="spin" size="lg"></box-icon>
      <p className="text-xl">Loading...</p>
    </div>
  ) : (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:title/:id" element={<Description />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
