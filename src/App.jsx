import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Sellerlogin from "./Components/SellerLogin/Sellerlogin";
import Sellersignup from "./Components/Sellersignup/Sellersignup";
import SellerHome from "./Components/SellerHome/SellerHome";
// import SellerState from "./Context/SellerState";
import ApprovedItems from "./Context/ApprovedItems";
import AdminHome from "./Components/Admin/Admin Home/AdminHome";
import Account from "./Components/Account/Account";

function App() {
  return (
    <div className="App">
      <ApprovedItems>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sellerhome" element={<SellerHome />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/sellerlogin" element={<Sellerlogin />} />
            <Route exact path="/sellersignup" element={<Sellersignup />} />
            <Route exact path="/admin" element={<AdminHome />} />
            <Route exact path="/account" element={<Account/> }/>
          </Routes>
        </BrowserRouter>
      </ApprovedItems>
    </div>
  );
}

export default App;
