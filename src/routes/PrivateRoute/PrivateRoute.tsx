import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authToken = localStorage.getItem("authToken");
  console.log("Private route token", !!authToken);
  if (!authToken) {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
