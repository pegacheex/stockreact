import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Pages/Landing.js";
import About from "./Components/Pages/About.js";
import Products from "./Components/Pages/Products.js";
import Pricing from "./Components/Pages/Pricing.js";
import ContactUs from "./Components/Pages/ContactUs.js";
import Videos from "./Components/Pages/Videos.js";
import SignUp from "./Components/Pages/SignUp.js";
import TermsAndConditions from "./Components/Pages/TermsAndConditions";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import ConfirmAccount from "./Components/Pages/ConfirmAccount";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import ResetPassword from "./Components/Pages/ResetPassword";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/confirm-account" element={<ConfirmAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
