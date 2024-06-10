import { Route, Routes } from "react-router-dom";
import { data } from "../../app/routes/RoutesData";
export const CustomRoutes = () => {
  return (
    <Routes>
      {data.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
