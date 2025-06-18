import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../layouts/Header';
import ResetPassword from '../pages/auth/ResetPassword';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import OtpVerfication from '../pages/auth/OtpVerfication';
import Product from '../pages/product/Product';
import ForgetPassword from '../pages/auth/ForgetPassword';
import VideoBackground from '../components/VIdeoAndImageWrapper/VideoBackground';
import ImageBackground from '../components/VIdeoAndImageWrapper/ImageBackground';

const Router = () => {
  const location = useLocation();
  const authPaths = [
    '/login',
    '/signup',
    '/resetpassword',
    '/optverfication',
    '/forgetpassword',
  ];
  const isAuthRoute = authPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {isAuthRoute ? <VideoBackground /> : <ImageBackground />}

      {/* {!isAuthRoute && <Header />} */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/optverfication" element={<OtpVerfication />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default Router;
