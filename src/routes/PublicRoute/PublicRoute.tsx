import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const authToken = localStorage.getItem("authToken");
  if (!!authToken) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoute;
