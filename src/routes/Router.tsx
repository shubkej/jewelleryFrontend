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
import Cart from '../pages/product/Cart';
import ProductDetails from '../pages/product/ProductDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

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
        <Route path="/product" element={<Product />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/optverfication" element={<OtpVerfication />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<>Page Not Found !</>} />
      </Routes>
    </>
  );
};

export default Router;
