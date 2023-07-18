import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div className="container">
      <h1>Lambda Eats</h1>
      <nav>
          <Link to='/'>Home</Link>
          <Link to='pizza' id="order-pizza">Order Pizza</Link>
      </nav>
      <p>You can remove this code and create your own header</p>
      <Routes>
      <Route path='pizza' element={<Pizza />} />
    </Routes>
    </ div>
  );
};
export default App;
