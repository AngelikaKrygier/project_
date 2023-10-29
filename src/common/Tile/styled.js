import styled, { css } from "styled-components";
import { ReactComponent as VectorDown } from "../../images/vectorDown.svg";
import { ReactComponent as VectorUp } from "../../images/vectorUp.svg";

export const StyledTile = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
`;

export const StyledVectorDown = styled(VectorDown)`
  cursor: pointer;
  width: 10px;
`;

export const StyledVectorUp = styled(VectorUp)`
  cursor: pointer;
  width: 10px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  overflow: scroll;
  overflow-x: hidden;
  max-height: 145px;

  ${({ changeLog }) =>
    changeLog &&
    css`
      max-height: 100%;
    `};
`;

export const ListItem = styled.li`
  padding: 5px 15px 5px 5px;
  font-size: 13px;
  display: grid;
  align-items: center;
  grid-gap: 15px;
  grid-template-columns: auto auto 1fr;
`;

export const ListItemDescription = styled.a``;

export const ItemDate = styled.span`
  font-size: 12px;
  justify-self: end;
  font-style: italic;
  color: ${({ theme }) => theme.colors.shadyLady};
`;

export const ExeVersion = styled.span`
  font-size: 12px;
  justify-self: end;
  font-style: italic;
  color: ${({ theme }) => theme.colors.shadyLady};
`;

export const ListItemContent = styled.p`
  margin: 0;
  text-align: justify;
  grid-column: span 3;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.shadyLady};
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  justify-self: end;
  color: ${({ theme }) => theme.colors.seance};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.codGrey};
  }
`;
