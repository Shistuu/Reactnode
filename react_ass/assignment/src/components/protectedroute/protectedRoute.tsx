import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userData = localStorage.getItem("authentication_token") ?? "";
  if (!userData) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
