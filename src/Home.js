import React from "react";
import { Footer, SSH, Header, Navbar, Feedback, Howork } from "./container";

const Home = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <SSH />
        <Howork />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
