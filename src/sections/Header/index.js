import ToggleSwitch from "components/ToggleSwitch/index";
import React from "react";
import { HeaderSection, Heading, SubTitle, Title } from "./HeaderElements";

const Header = (props) => {
  return (
    <HeaderSection>
      <Heading>
        <Title>Social Media Dashboard</Title>
        <SubTitle>Total Followers: 23,004</SubTitle>
      </Heading>
      <ToggleSwitch {...props} />
    </HeaderSection>
  );
};

export default Header;
