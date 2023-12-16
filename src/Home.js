import React from "react";
import HeroSection from "../src/components/Header/HeroSection";
import Header from "./components/Header/Header";

const Home = () => {
  const data = {
    name: "E Comm store",
  };

  return (
    <>
      <Header />
      <HeroSection myData={data} />;
    </>
  );
};

export default Home;
