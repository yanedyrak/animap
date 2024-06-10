import { CatalogPage } from "../../pages/CatalogPage";
import { MainPage } from "../../pages/MainPage";
import { TitlePage } from "../../pages/titlePage/TitlePage";

export const data = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/title/:id",
    element: <TitlePage />,
  },
];
