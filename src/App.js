import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import CheckoutDeatails from "./pages/checkout/CheckoutDeatails";
import Checkout from "./pages/checkout/Checkout";
import Reserve from "./pages/reserve/Reserve";
import ReservationPage from "./pages/reservation/ReservationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reservation-page" element={<ReservationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-details" element={<CheckoutDeatails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
