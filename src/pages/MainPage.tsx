import { Title } from "../shared/ui/title/Title";
import { Announce } from "../widgets/announce/Announce";
import { Catalog } from "../widgets/catalog/Catalog";
import { Trending } from "../widgets/trending/Trending";

export const MainPage = () => {
  return (
    <>
      <Title />
      <Trending />
      <Announce />
      <Catalog />
    </>
  );
};
