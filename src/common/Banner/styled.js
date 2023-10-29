import styled from "styled-components";

export const StyledBanner = styled.div`
  padding: 10px;
  height: 80px;
  display: grid;
  background-image: linear-gradient(
    95deg,
    rgba(0, 0, 0, 1) 3%,
    rgba(45, 44, 44, 1) 86%
  );
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
