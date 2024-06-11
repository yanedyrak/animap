import BurgerMenu from "../widgets/drawer/BurgerMenu";
import { Header } from "../widgets/header/Header";

import { CustomRoutes } from "./routes/RoutesProvide";

function App() {
  return (
    <>
      <Header />
      <BurgerMenu />
      <CustomRoutes />
    </>
  );
}

export default App;
