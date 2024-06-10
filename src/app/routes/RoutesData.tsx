import { CatalogPage } from "../../pages/CatalogPage";
import { MainPage } from "../../pages/MainPage";

export const data = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
];
