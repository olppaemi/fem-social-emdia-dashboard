import rem from "services/rem";
import styled from "styled-components";
import up from "assets/icon-up.svg";
import down from "assets/icon-down.svg";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: ${rem(28)} ${rem(28)} ${rem(24)} ${rem(24)};
  border-radius: ${rem(5)};
  cursor: pointer;

  & > * + * {
    margin-top: ${rem(24)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.strong`
  color: ${({ theme }) => theme.text1};
  font-weight: 700;
`;
export const Counter = styled.strong`
  color: ${({ theme }) => theme.text2};
  font-size: ${rem(32)};
  font-weight: 700;
`;
export const Change = styled.div`
  color: ${({ minus, theme }) => (minus ? theme.red : theme.green)};

  &:before {
    display: inline-block;
    content: "";
    width: ${rem(8)};
    height: ${rem(8)};
    background-image: ${({ minus }) => (minus ? `url(${down})` : `url(${up})`)};
    background-repeat: no-repeat;
    margin-right: ${rem(3)};
    transform: translateY(${rem(2)});
  }
`;
