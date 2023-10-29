import { Section } from "../../common/Section";

export const ChangesLog = ({ changeLogsList }) => (
  <Section
    changeLog
    sectionHeader={"Lista Zmian"}
    list={changeLogsList}
  ></Section>
);
