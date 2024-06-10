import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import {
  setGenre,
  setStatus,
  setType,
  setYears,
} from "../../shared/store/filterSlice";
import { Filter } from "./filter/Filter";
import styles from "./Filters.module.scss";
import Carousel from "react-multi-carousel";

export const Filters = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1126 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1125, min: 830 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 830, min: 602 },
      items: 2,
    },
    phone: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  return (
    <div className={styles.carousel}>
      <Carousel
        responsive={responsive}
        arrows={false}
        infinite
        autoPlay
        autoPlaySpeed={7000}
        keyBoardControl
      >
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
        <Filter
          children={filter.years ? filter.years : "Sorted by"}
          items={[
            {
              label: "All",
              onClick: () => {
                dispatch(setYears(""));
              },
              key: "0",
            },
            {
              label: "Popularity",
              onClick: () => {
                dispatch(setYears("Popularity"));
              },
              key: "1",
            },
            {
              label: "Date",
              onClick: () => {
                dispatch(setYears("Date"));
              },
              key: "2",
            },
          ]}
        />
      </Carousel>
    </div>
  );
};
