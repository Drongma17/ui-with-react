// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./component/initialpage/Header";
import Home from "./component/initialpage/Home";
import About from "./component/initialpage/About";
import Contact from "./component/initialpage/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <ul>
            <li>
              {" "}
              <Link to="/">Home </Link>
            </li>
            <li>
              {" "}
              <Link to="/header">Header </Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About </Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
