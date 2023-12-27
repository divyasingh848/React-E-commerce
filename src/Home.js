import React from "react";
import HeroSection from "../src/components/Header/HeroSection";

import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "E Comm store",
  };

  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
