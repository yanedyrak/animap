import { Header } from "../widgets/header/Header";
import { Title } from "../shared/ui/title/Title";

import { Trending } from "../widgets/trending/Trending";
import { BurgerMenu } from "../widgets/drawer/BurgerMenu";

import { Announce } from "../widgets/announce/Announce";

import { Catalog } from "../widgets/catalog/Catalog";

function App() {
  return (
    <>
      <Header />
      <Title />
      <BurgerMenu />
      <Trending />

      <Announce />
      <Catalog />
    </>
  );
}

export default App;
