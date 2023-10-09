import react from 'react'
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from '../src/Component/Layout/Layout'
import Home from '../src/Component/Home/Home'
import Cart from '../src/Component/Cart/Cart'
import Login from '../src/Component/Login/Login'
import VerfiyCode from '../src/Component/VerfiyCode/VerfiyCode'
import ResetPassword from '../src/Component/ResetPassword/ResetPassword'
import GetPassword from '../src/Component/GetPassword/GetPassword'
import ProductDetails from '../src/Component/ProductDetails/ProductDetails'
import Profile from '../src/Component/Profile/Profile'
import Register from '../src/Component/Register/Register'
import Orders from '../src/Component/Orders/Orders'
import UserOrder from '../src/Component/UserOrder/UserOrder'
import Products from '../src/Component/Products/Products'
import WishList from '../src/Component/WishList/WishList'
import NotFound from '../src/Component/NotFound/NotFound'
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import CartContextProvider from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';
import PaymentInformation from './Component/PaymentInformation/PaymentInformation';
import Categories from './Component/Categories/Categories';
import Brands from './Component/Brands/Brands';

function App() {
const querClient=new QueryClient();
  let routes = createHashRouter([
    
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
        { path: "products", element: <ProtectedRoute><Products/></ProtectedRoute> },
        { path: "categories", element: <ProtectedRoute><Categories/></ProtectedRoute> },
        { path: "brands", element: <ProtectedRoute><Brands/></ProtectedRoute> },
        { path: "wishList", element: <ProtectedRoute><WishList/></ProtectedRoute> },
        { path: "allorders", element: <ProtectedRoute><Orders/></ProtectedRoute> },
        { path: "UserOrder", element: <ProtectedRoute><UserOrder/></ProtectedRoute> },
        { path: "PaymentInformation", element: <ProtectedRoute><PaymentInformation/></ProtectedRoute> },
        {path:"productdetails/:id",element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
        { path: 'login', element: <Login /> },
        { path: 'ResetPassword', element: <ResetPassword /> },
        { path: 'register', element: <Register /> },
        { path: 'VerfiyCode', element: <VerfiyCode /> },
        { path: 'GetPassword', element: <GetPassword/> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])

  return (
    <>
    <QueryClientProvider client={querClient}>
        <UserContextProvider>
          <CartContextProvider>
        <RouterProvider router={routes}>
        </RouterProvider>
        </CartContextProvider>
        <Toaster  toastOptions={{
    success: {
      // style: {
      //  border: ' 1px solid green',
      //   width:'40%',
      //   height:'100px',
      //   background:"green",
      //   color:"white"
      // },
      // iconTheme: {
      //   primary: 'green',
      //   secondary: 'white',

      // },
    },
    error: {
      style: {
        background: 'red',
      },
    },
  }}/>
      </UserContextProvider>
      < ReactQueryDevtools intialIsOPen="false"></ ReactQueryDevtools>
      </QueryClientProvider>


    </>
  );
}

export default App;
