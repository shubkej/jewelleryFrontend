import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const userDetails:any = localStorage.getItem("userDetails");
  console.log("Private route token", !!userDetails);
  if (userDetails.role === "ADMIN") {
    return <Navigate to={"/login"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminRoute;
