
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Favorites from "./Pages/Favorites";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
