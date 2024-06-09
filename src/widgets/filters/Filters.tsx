import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { setGenre, setStatus, setType } from "../../shared/store/filterSlice";
import { Filter } from "./filter/Filter";
import styles from "./Filters.module.scss";
export const Filters = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Filters</div>
      <Filter
        children={filter.genre ? filter.genre : "Genre"}
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
      <Filter
        children={filter.type ? filter.type : "Type"}
        items={[
          {
            label: "All",
            onClick: () => {
              dispatch(setType(""));
            },
            key: "0",
          },
          {
            label: "Film",
            onClick: () => {
              dispatch(setType("Film"));
            },
            key: "1",
          },
          {
            label: "Serial",
            onClick: () => {
              dispatch(setType("Serial"));
            },
            key: "2",
          },
        ]}
      />
      <Filter
        children={filter.status ? filter.status : "Status"}
        items={[
          {
            label: "All",
            onClick: () => {
              dispatch(setStatus(""));
            },
            key: "0",
          },
          {
            label: "Ended",
            onClick: () => {
              dispatch(setStatus("Ended"));
            },
            key: "1",
          },
          {
            label: "Ongoing",
            onClick: () => {
              dispatch(setStatus("Ongoing"));
            },
            key: "2",
          },
        ]}
      />
    </div>
  );
};
