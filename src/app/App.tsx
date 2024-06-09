import { Header } from "../widgets/header/Header";
import { Title } from "../shared/ui/title/Title";

import { Filters } from "../widgets/filters/Filters";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Filters filteredBy="genre" />
    </>
  );
}

export default App;
