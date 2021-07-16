import React from "react";
import image1 from "./image1.png";
import logo from "./logo.png";

const Banner = () => {
  return <img src={image1} alt="banner" width="100%" height="800px" />;
};
export const Logo = () => {
  return <img src={logo} alt="logo" width="64px" height="64px" />;
};
export default Banner;
