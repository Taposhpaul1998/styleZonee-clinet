import React from 'react';
import { Route, Routes } from 'react-router';
import CheckoutConteiner from './componet/checkout/CheckoutConteiner';
import AddCatagory from './componet/deshbord/deshbord/addCatagory/AddCatagory';
import AddProduct from './componet/deshbord/deshbord/addProduct/AddProduct';
import AddSlider from './componet/deshbord/deshbord/addSlider/AddSlider';
import AllUsers from './componet/deshbord/deshbord/allUsers/AllUsers';
import Deshbord from './componet/deshbord/deshbord/Deshbord';
import OrdersConteiner from './componet/deshbord/deshbord/orderProducts/OrdersConteiner';
import StockConteiner from './componet/deshbord/deshbord/stock/StockConteiner';
import MyProfile from './componet/deshbord/profile/MyProfile';
import Footer from './componet/footer/Footer';
import Header from './componet/header/Header';
import Home from './componet/home/Home';
import ProductDetailsConteiner from './componet/shop/productDetails/ProductDetailsConteiner';
import Shop from './componet/shop/Shop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditeProduct from './componet/deshbord/deshbord/stock/editeProduct/EditeProduct';
import Login from './componet/ui/login&sinup/logIn/Login';
import SingUp from './componet/ui/login&sinup/Singup/SingUp';
import PrivetRoute from './componet/privetRoute/PrivetRoute';
import LoginAndSingupRoute from './componet/privetRoute/LoginAndSingupRoute';
import EmployeeRoute from './componet/privetRoute/EmployeeRoute';
import { AdminRoute } from './componet/privetRoute/AdminRoute';
import FavoriteConteiner from './componet/favorite/FavoriteConteiner';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={
          <LoginAndSingupRoute>
            <Login />
          </LoginAndSingupRoute>
        } />
        <Route path='/singup' element={
          <LoginAndSingupRoute>
            <SingUp />
          </LoginAndSingupRoute>
        } />
        <Route path='/' element={<Home />} />
        <Route path='/shop/search' element={<Shop />} />
        <Route path='favarite' element={<FavoriteConteiner />} />
        <Route path='/shop/:productId' element={<ProductDetailsConteiner />} />
        <Route path='/checkout' element={<CheckoutConteiner />} />
        <Route path='/stock/edite/:productId' element={<EditeProduct />} />
        {/* profile area start  */}
        <Route path='/profile' element={
          <PrivetRoute>
            <MyProfile />
          </PrivetRoute>
        }>
        </Route>
        {/* profile area end */}
        {/* deshbord area start */}
        <Route path='/deshbord' element={
          <PrivetRoute>
            <Deshbord />
          </PrivetRoute>
        }>
          <Route path='' element={
            <EmployeeRoute>
              <StockConteiner />
            </EmployeeRoute>
          } />
          {/* <Route path='sells' element={<SellProducts />} /> */}
          <Route path='orders' element={
            <EmployeeRoute>
              <OrdersConteiner />
            </EmployeeRoute>
          } />
          <Route path='addProduct' element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          } />
          <Route path='addCatagory' element={
            <AdminRoute>
              <AddCatagory />
            </AdminRoute>
          } />
          <Route path='addSlider' element={
            <AdminRoute><AddSlider /></AdminRoute>} />
          <Route path='users' element={
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          } />
        </Route>
        {/* deshbord area end */}
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
