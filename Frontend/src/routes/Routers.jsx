import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Manage_Brackets from "../pages/Manage_Brackets";

const Routers = () => {
  return (
    <Routes>
      <Route path="/add-tournament" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;
