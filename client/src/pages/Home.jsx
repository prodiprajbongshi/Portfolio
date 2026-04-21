import React from "react";
import Navbar from "../components/Navbar";
import HeroArea from "../components/HeroArea";
import About from "../components/About";
import Work from "../components/Work";
import Services from "../components/Services";
import WorkProcess from "../components/WorkProcess";
import Contact from "../components/Contact";
import BottomBar from "../components/BottomBar";
import PrivacyPolicy from "./PrivacyPolicy";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BottomBar />
      <HeroArea />
      <About />
      <Work />
      <Services />
      <WorkProcess />
      <Contact />
    </div>
  );
};

export default Home;
