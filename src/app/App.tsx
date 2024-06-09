import { Header } from "../widgets/header/Header";
import { Title } from "../shared/ui/title/Title";
import { Card } from "../entities/card/Card";
import { Filters } from "../widgets/filters/Filters";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Filters />
    </>
  );
}

export default App;
