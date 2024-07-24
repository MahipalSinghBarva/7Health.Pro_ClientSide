import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './component/header/Header';
import UserRegister from "./user/UserRegister";
import UserLogin from "./user/UserLogin";
import Footer from "./component/footer/Footer";





import AboutMe from "./component/AboutMe";

import Home from "./component/Home";
import NewsDetails from "./component/news/NewsDetails";


function App() {
 
 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/post/:id" element={<NewsDetails />} exact />

        <Route path="/register" element={<UserRegister />} exact />
        <Route path="/login" element={<UserLogin />} exact />

        <Route path="/aboutus" element={<AboutMe />} exact />

       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
