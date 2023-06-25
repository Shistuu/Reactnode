import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp";
import AddProductForm from "./components/AddProduct/AddProductForm";
import GetProducts from "./components/getProduct/GetProduct";
import ProtectedRoute from "./components/protectedroute";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route
          path="product"
          element={
            <ProtectedRoute>
              <GetProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="add-product"
          element={
            <ProtectedRoute>
              <AddProductForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
