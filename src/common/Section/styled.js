import styled, { css } from "styled-components";
import { ReactComponent as DocumentIcon } from "../../images/DocumentIcon.svg";

export const StyledSection = styled.div`
  margin: 0 10px;

  ${({ changeLog }) =>
    changeLog &&
    css`
      grid-row: span 2;
    `};
`;

export const SectionHeader = styled.h2`
  margin: 0 0 5px;
  padding: 0 15px;
  font-size: 15px;
  font-weight: 700;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 5px;
  color: ${({ theme }) => theme.colors.codGrey};
`;

export const StyledDocumentIcon = styled(DocumentIcon)`
  width: 18px;
`;

export const SubSectionHeader = styled.h3`
  font-weight: 500;
  margin: 0;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  background-image: linear-gradient(
    95deg,
    rgba(0, 0, 0, 1) 3%,
    rgba(45, 44, 44, 1) 86%
  );
  color: ${({ theme }) => theme.colors.white};
`;
