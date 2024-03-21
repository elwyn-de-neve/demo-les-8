import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Update from "./pages/Update.jsx";
import Unmount from "./pages/Unmount.jsx";
import Countries from "./pages/Countries.jsx";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/unmount">Unmount</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<Update />} />
        <Route path="/unmount" element={<Unmount />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
