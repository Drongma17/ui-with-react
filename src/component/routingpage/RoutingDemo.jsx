import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/initialpage/Header";


function RoutingDemo(){

    return (
        <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    );
}

export default RoutingDemo;