import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import Addproduct from "./component/addProduct/Addproduct";
import Menproduct from "./component/Men/Menproduct";
import Editproduct from "./component/editproduct/Editproduct";
import Home from "./component/Home/Home";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/Signup/SignUp";
import Womenproduct from "./component/Women/Women";
import ViewProduct from "./component/Singlepproduct/ViewProduct";
import Kidsproduct from "./component/KIds/Kids";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/edit-product/:id" element={<Editproduct />} />
        <Route path="/view-product/:id" element={<ViewProduct />} />
        <Route path="/Men" element={<Menproduct />} />
        <Route path="/women" element={<Womenproduct />} />
        <Route path="/Kids" element={<Kidsproduct />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
