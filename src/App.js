import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VslLanding from "./pages/VslLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ia" element={<VslLanding />} />
      </Routes>
    </Router>
  );
}

export default App;