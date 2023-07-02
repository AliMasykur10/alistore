import { Routes, Route } from "react-router-dom";
import Navbar from "./components/template/navbar/Navbar";
import Footer from "./components/template/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
