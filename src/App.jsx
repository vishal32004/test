import "./styles/index.css";
import "./styles/responsive.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InsidePage from "./pages/InsidePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InsidePage" element={<InsidePage />} />
      </Routes>
    </Router>
  );
}

export default App;
