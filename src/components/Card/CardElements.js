import rem from "services/rem";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: ${rem(5)};
  border-top: 3px solid
    ${({ site, theme }) => {
      if (site === "facebook") {
        return theme.facebook;
      } else if (site === "twitter") {
        return theme.twitter;
      } else if (site === "youtube") {
        return theme.youtube;
      }
    }};

  border-image: ${({ site, theme }) => {
    if (site === "instagram") {
      return theme.instagram;
    }
  }};
  border-image-slice: 1;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${rem(24)} 0;
`;

export const CardId = styled.p`
  color: ${({ theme }) => theme.text1};
  margin-left: ${rem(7)};
`;
export const CardBody = styled.div`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.text2};
    font-size: ${rem(48)};
  }

  h4 {
    font-weight: 400;
    color: ${({ theme }) => theme.text1};
    letter-spacing: 3px;
    margin-top: ${rem(10)};
  }
`;
export const NumFollowers = styled.p``;
