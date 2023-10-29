import { Tile } from "../Tile";
import {
  StyledSection,
  SectionHeader,
  StyledDocumentIcon,
  SubSectionHeader,
} from "./styled";

export const Section = ({ sectionHeader, changeLog, list, content }) => (
  <StyledSection changeLog={changeLog}>
    <SectionHeader>
      <StyledDocumentIcon />
      {sectionHeader}
    </SectionHeader>
    {!changeLog ? (
      list.map((item) => (
        <div key={item.id}>
          <SubSectionHeader>{item.application}</SubSectionHeader>
          <Tile mainList={item.others}></Tile>
        </div>
      ))
    ) : (
      <Tile mainList={list} changeLog />
    )}
  </StyledSection>
);
