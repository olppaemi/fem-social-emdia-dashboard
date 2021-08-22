import React from "react";
import {
  CartFooterContainer,
  DownWrapper,
  UpWrapper,
} from "./CardFooterElements";
import up from "assets/icon-up.svg";
import down from "assets/icon-down.svg";

const CardFooter = ({ change }) => {
  return (
    <CartFooterContainer>
      {change >= 0 ? (
        <UpWrapper>
          <img src={up} alt="icon-up" />
          <span>{change} Today</span>
        </UpWrapper>
      ) : (
        <DownWrapper>
          <img src={down} alt="icon-up" />
          <span>{-change} Today</span>
        </DownWrapper>
      )}
    </CartFooterContainer>
  );
};

export default CardFooter;
