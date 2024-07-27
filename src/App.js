import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import HireWriter from "./pages/HireWriter";

function App() {
  return (
    <div className="App">
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/faqs" element={<FAQ />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/hire-a-grant-writer" element={<HireWriter />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
