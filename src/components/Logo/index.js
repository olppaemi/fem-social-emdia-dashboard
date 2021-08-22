import React from "react";
import facebook from "assets/icon-facebook.svg";
import twitter from "assets/icon-twitter.svg";
import instagram from "assets/icon-instagram.svg";
import youtube from "assets/icon-youtube.svg";

const Logo = ({ logo }) => {
  if (logo === "facebook") {
    return <img src={facebook} alt="facebook" />;
  } else if (logo === "twitter") {
    return <img src={twitter} alt="twitter" />;
  } else if (logo === "instagram") {
    return <img src={instagram} alt="instagram" />;
  } else if (logo === "youtube") {
    return <img src={youtube} alt="youtube" />;
  } else return null;
};

export default Logo;
