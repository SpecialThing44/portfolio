import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ThemeContext, ThemeProvider } from "./contexts/themeContext";
import "./styles/global.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Landing from "./pages/landing/landing";
import PageNotFound from "./pages/page-not-found/page-not-found";
import Contact from "./pages/contact/contact";

function AnimatedRoutes() {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <div>
          <Routes location={location}>
            <Route path="" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
