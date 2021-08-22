import React from "react";
import rem from "services/rem";
import styled from "styled-components";
import { overview } from "data.json";
import OverviewCard from "components/OverviewCard/index";

const OverviewContainer = styled.div`
  h1 {
    color: ${({ theme }) => theme.text2};
  }
  margin-bottom: ${rem(48)};
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${rem(30)};
`;

const Overview = () => {
  return (
    <OverviewContainer>
      <h1>Overview - Today</h1>
      <CardsContainer>
        {overview.map((data) => (
          <OverviewCard key={data.id} {...data} />
        ))}
      </CardsContainer>
    </OverviewContainer>
  );
};

export default Overview;
