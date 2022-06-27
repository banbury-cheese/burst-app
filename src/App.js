import { Route, Routes } from "react-router-dom";
import "./Styles/App.scss";
// ----- Pages -----
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FAQ from "./Pages/FAQ/FAQ"
import Careers from "./Pages/Careers/Careers";
import Learn from "./Pages/Learn/Learn"
// ----- Components -----
import Navbar from "./Components/Global/Navbar"
import Blob from "./Components/Blob/Blob"

function App() {
  return (
    <div className="App">
      <div className="blob">
        <Blob />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="learn" element={<Learn />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="careers" element={<Careers />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
