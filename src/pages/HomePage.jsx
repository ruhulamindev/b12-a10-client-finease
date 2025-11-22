import React from "react";
import Banner from "../components/Banner";
import Overview from "../components/Overview";
import TwoStatic from "../components/TwoStatic";
import MyContainer from "../components/MyContainer";

const HomePage = () => {
  return (
    <div>
      <MyContainer>
        <Banner />
        <Overview />
        <TwoStatic />
      </MyContainer>
    </div>
  );
};

export default HomePage;
