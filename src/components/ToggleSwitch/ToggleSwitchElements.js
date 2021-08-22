import styled from "styled-components";

const rem = (px) => `${px / 16}rem`;

export const Label = styled.label`
  position: relative;
  color: ${({ theme }) => theme.text2};
  font-weight: 700;

  &:after {
    display: inline-block;
    content: "";
    width: ${rem(48)};
    height: ${rem(24)};
    border-radius: ${rem(32)};
    background: ${({ theme }) => theme.toggle};
    transform: translateY(${rem(6)});
  }

  &:before {
    display: block;
    content: "";
    width: ${rem(19)};
    height: ${rem(19)};
    background: ${({ theme }) => theme.topBgPattern};
    border-radius: 50%;
    position: absolute;
    top: -10%;
    left: ${({ checked }) => (checked ? "82%" : "65%")};
    z-index: 5;
    transition: all 200ms ease-in-out;
  }
`;

export const ToggleSwitchContainer = styled.div`
  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
`;
