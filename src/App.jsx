import Home from "./pages/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { HomeContextProvider } from "./context/HomeContext";

function App() {
  return (
    <>
      <HomeContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </HomeContextProvider>
    </>
  );
}

export default App;
