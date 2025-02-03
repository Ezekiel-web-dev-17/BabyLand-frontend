import './App.css';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import Shop from './pages/Shop/Shop';
import LikesPage from './pages/Views/LikesPage';
import ProductPage from './pages/Vercel/ProductPage';
import ShoppingCart from './pages/Cart/ShoppingCart';
import CheckoutPage from './pages/Export/CheckoutPage';
import Contact from './pages/Mail/Contact';
import Blog from './pages/Storybook/Blog';
import FAQs from './pages/Messages/FAQs';
import Register from './pages/Secure/Register';
import Login from './pages/Log/Login';
import Error from './pages/Error/Error';
import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQs />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
 