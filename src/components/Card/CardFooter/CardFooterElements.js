import rem from "services/rem";
import styled from "styled-components";
export const CartFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${rem(24)} 0;

  span {
    margin-left: ${rem(6)};
  }

  img {
    transform: translateY(${rem(-2)});
  }
`;
export const UpWrapper = styled.div`
  color: ${({ theme }) => theme.green};
`;
export const DownWrapper = styled.div`
  color: ${({ theme }) => theme.red};
`;
