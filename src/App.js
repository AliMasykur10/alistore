import { Routes, Route } from "react-router-dom";
import Navbar from "./components/template/navbar/Navbar";
import Footer from "./components/template/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
