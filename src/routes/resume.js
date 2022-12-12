import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Content } from "../component/content";
import { Topbar } from "../component/topbar";
import { Resumepage } from "../resumepage.js";
export function Resumepages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resumepage />}></Route>
        <Route path="/about" element={<Content />}></Route>
      </Routes>
    </Router>
  );
}
