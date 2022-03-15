import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Topbar,
  Sidebar,
  Home,
  User,
  NewUser,
  Userlist,
  ProductList,
  Product,
  NewProduct,
} from "./pages";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
