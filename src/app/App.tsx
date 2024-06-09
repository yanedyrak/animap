import { Header } from "../widgets/header/Header";
import { Title } from "../shared/ui/title/Title";

import { Filters } from "../widgets/filters/Filters";
import { Trending } from "../widgets/trending/Trending";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Trending />
      <Filters />
    </>
  );
}

export default App;
