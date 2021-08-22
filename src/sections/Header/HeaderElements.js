import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(40)};
`;
export const Heading = styled.div``;
export const Title = styled.h1`
  color: ${({ theme }) => theme.text2};
  margin-bottom: ${rem(10)};
`;
export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.text1};
`;
