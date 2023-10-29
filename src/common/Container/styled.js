import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  background-color: ${({ theme }) => theme.colors.whiteLilac};
`;
