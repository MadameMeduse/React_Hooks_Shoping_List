import React from "react";
import UserPageTemplate from "../template/UserPageTemplate";
import Slider from "../components/molecules/Slider/Slider";
import Button from "../components/atoms/Button/Button";

const HomeView = () => {
  return (
    <UserPageTemplate>
      <>
        <Slider />
      </>
    </UserPageTemplate>
  );
};

export default HomeView;
