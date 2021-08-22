import Card from "components/Card/index";
import React from "react";
import rem from "services/rem";
import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${rem(30)};
  margin-top: calc(${rem(34)} + 1vw);
  margin-bottom: ${rem(48)};

  @media only Screen and (max-width: ${rem(1024)}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only Screen and (max-width: ${rem(768)}) {
    grid-template-columns: 1fr;
  }
`;

const FollowerInfo = ({ stats }) => {
  return (
    <CardsContainer>
      {stats.map((s) => (
        <Card key={s.site} {...s} />
      ))}
    </CardsContainer>
  );
};

export default FollowerInfo;
