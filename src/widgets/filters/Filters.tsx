import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { setGenre } from "../../shared/store/filterSlice";
import { Filter } from "./filter/Filter";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { genre } = useAppSelector((state) => state.filter);

  return (
    <div className="filters">
      <Filter
        children={genre ? genre : "Genre"}
        items={[
          {
            label: "All",
            onClick: () => {
              dispatch(setGenre(""));
            },
            key: "0",
          },
          {
            label: "Romantic",
            onClick: () => {
              dispatch(setGenre("Romantic"));
            },
            key: "1",
          },
          {
            label: "Action",
            onClick: () => {
              dispatch(setGenre("Action"));
            },
            key: "2",
          },
        ]}
      />
    </div>
  );
};
