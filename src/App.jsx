import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated, "user!");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
