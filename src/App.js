import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Academics from "./routes/Academics";
import Traning from "./routes/Traning";
import Scholership from "./routes/Scholership";
import Studentcorener from "./routes/Studentcorener";
import Contact from "./routes/Contact";
import AboutUs from "./components/AboutUs";
import Enquiry from "./components/testimonial/EnquiryFrom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Academics" element={<Academics />} />
        <Route path="/Traning" element={<Traning />} />
        <Route path="/Scholership" element={<Scholership />} />
        <Route path="/Studentcorener" element={<Studentcorener />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Enquiry />
    </div>
  );
}
