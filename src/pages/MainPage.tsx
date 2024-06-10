import Title from "antd/es/skeleton/Title";
import { Announce } from "../widgets/announce/Announce";
import { Catalog } from "../widgets/catalog/Catalog";
import BurgerMenu from "../widgets/drawer/BurgerMenu";
import { Trending } from "../widgets/trending/Trending";

export const MainPage = () => {
  return (
    <>
      <Title />
      <BurgerMenu />
      <Trending />
      <Announce />
      <Catalog />
    </>
  );
};
