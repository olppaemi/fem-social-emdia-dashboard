import rem from "services/rem";
import styled from "styled-components";

export const ToggleSwitchContainer = styled.div`
  color: ${({ theme }) => theme.text2};

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  @media only Screen and (max-width: ${rem(768)}) {
    display: flex;
    justify-content: space-between;
    margin-top: ${rem(20)};
  }
`;

export const Label = styled.label`
  position: relative;
  cursor: pointer;

  &:after {
    display: inline-block;
    content: "";
    width: ${rem(48)};
    height: ${rem(24)};
    border-radius: ${rem(32)};
    background: ${({ theme }) => theme.toggle};
    transform: translateY(${rem(6)});

    @media only Screen and (max-width: ${rem(768)}) {
      transform: translateY(${rem(-5)});
    }
  }

  &:before {
    display: block;
    content: "";
    width: ${rem(19)};
    height: ${rem(19)};
    background: ${({ theme }) => theme.topBgPattern};
    border-radius: 50%;
    position: absolute;
    top: -11%;
    left: ${({ checked }) => (checked ? "60%" : "20%")};
    z-index: 5;
    transition: all 200ms ease-in-out;
  }
`;
