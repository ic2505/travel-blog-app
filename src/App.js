import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user1" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
