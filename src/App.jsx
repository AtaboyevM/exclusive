import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Accaunt from "./pages/accaunt/Accaunt";
import Cart from "./pages/cart/Cart";
import Check from "./pages/checkout/Check";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import Wishlist from "./pages/wishlist/Wishlist";
import Id from "./pages/useParams/Id";
import Eror from "./pages/eror/Eror";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/account"
            element={user ? <Accaunt /> : <Navigate to="/login" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Check />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<Id />} />
          <Route path="*" element={<Eror />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
