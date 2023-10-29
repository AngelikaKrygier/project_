import { Container } from "../common/Container/styled";
import { Banner } from "../common/Banner";
import { ChangesLog } from "../features/ChangeLogs";
import { Concepts } from "../features/Concepts";
import { CurrentFeatures } from "../features/CurrentFeatures";
import {
  getChangeLogs,
  getConceptsList,
  getCurrentFeatures,
} from "../utils/getApi";
import { useDataFetching } from "../utils/useDataFetching";

export const App = () => {
  const { data: changeLogs } = useDataFetching(getChangeLogs);
  const { data: concepts } = useDataFetching(getConceptsList);
  const { data: currentFeatures } = useDataFetching(getCurrentFeatures);

  return (
    <>
      <Banner />
      <Container>
        {currentFeatures || concepts ? (
          <div>
            {currentFeatures ? <CurrentFeatures list={currentFeatures} /> : ""}
            {concepts ? <Concepts list={concepts} /> : ""}
          </div>
        ) : (
          ""
        )}
        {changeLogs ? <ChangesLog changeLogsList={changeLogs} /> : ""}
      </Container>
    </>
  );
};
