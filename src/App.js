import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import MyOrdersPage from './pages/MyOrdersPage';
import ProductsPage from './pages/ProductsPage';
import CouponsPage from './pages/CouponsPage';
import AboutPage from './pages/AboutPage';
import ContactusPage from './pages/ContactusPage';
import PoliciesPage from './pages/PoliciesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgetUsernamePage from './pages/ForgetUsernamePage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import CartPage from './pages/CartPage';
import BillingPage from './pages/BillingPage';
import BillingAddressPage from './pages/BillingAddressPage';
import OrderPage from './pages/OrderPage';
import InnerOrderPage from './pages/InnerOrderPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/products",
    element: <ProductsPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetailPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/billing",
    element: <BillingPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/billing-address",
    element: <BillingAddressPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/orders",
    element: <OrderPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/inner-order",
    element: <InnerOrderPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/coupons",
    element: <CouponsPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/contact-us",
    element: <ContactusPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/policies",
    element: <PoliciesPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/fg-usr",
    element: <ForgetUsernamePage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/fg-psw",
    element: <ForgetPasswordPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "*",
    element: <PageNotFound/>,
    errorElement: <PageNotFound/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
