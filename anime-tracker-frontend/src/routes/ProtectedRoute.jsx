import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.get("token");
  return token ? children : <Navigate to={"/login"} />;
};
