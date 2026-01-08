import React from "react";
import Banner from "../components/Banner";
import Overview from "../components/Overview";
import TwoStatic from "../components/TwoStatic";
import MyContainer from "../components/MyContainer";
import OutLine from "../components/OutLine";

const HomePage = () => {
  return (
    <div>
      <MyContainer>
        <Banner />
        <OutLine/>
        <TwoStatic />
      </MyContainer>
    </div>
  );
};

export default HomePage;
