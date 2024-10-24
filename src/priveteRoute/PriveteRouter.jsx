/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
