import rem from "services/rem";
import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(40)};

  @media only Screen and (max-width: ${rem(768)}) {
    flex-direction: column;
  }
`;
export const Heading = styled.div`
  @media only Screen and (max-width: ${rem(768)}) {
    padding-bottom: ${rem(25)};
    border-bottom: 1px solid ${({ theme }) => theme.text1};
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.text2};
  margin-bottom: ${rem(10)};
`;
export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.text1};
`;
