import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
//import Contact from "./pages/contact";
//import ShopContextProvider from "./context/shop-context";


function App() {
  return <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </div>
}

export default App;
