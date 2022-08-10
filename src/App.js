import React from "react";
import "./App.scss";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Technology from "./container/shop/technology";
import Fashion from "./container/shop/fashion";
import Crypto from "./container/shop/crypto";
import VideoGames from "./container/shop/videogames";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/fash" element={<Fashion />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/videoG" element={<VideoGames />} />
      </Routes>
    </>
  );
}

export default App;
