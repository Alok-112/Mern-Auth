import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";

axios.defaults.baseURL = "https://mern-auth-backend-production-9520.up.railway.app/";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 800 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
