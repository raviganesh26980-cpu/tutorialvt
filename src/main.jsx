import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; 



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Header />
   <Hero />
   <About />
   <Courses />
   <Contact />
   <Footer />

  </React.StrictMode>
);



