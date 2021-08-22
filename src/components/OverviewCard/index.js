import Logo from "components/Logo/index";
import React from "react";
import {
  CardContainer,
  Change,
  Counter,
  Title,
  Wrapper,
} from "./OvervewCardElements";

const OverviewCard = ({ title, site, count, change }) => {
  return (
    <CardContainer>
      <Wrapper>
        <Title>{title}</Title>
        <Logo logo={site} />
      </Wrapper>
      <Wrapper>
        <Counter>{count}</Counter>
        <Change minus={change < 0}>{change < 0 ? -change : change}%</Change>
      </Wrapper>
    </CardContainer>
  );
};

export default OverviewCard;
