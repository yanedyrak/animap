import { useGetTitleBySearchQuery } from "../../shared/api/trending.api";
import { IMG_URL } from "../../shared/api/urlValues";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import styles from "./SearchTitle.module.scss";
import { StarSVG } from "../../shared/assets/StarSVG";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { setSearch } from "../../shared/store/searchSlice";
export const SearchTitle = ({
  setValue,
}: {
  setValue: (el: string) => void;
}) => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.search.search);
  const { data } = useGetTitleBySearchQuery(name);
  return (
    <div className={styles.container}>
      {data &&
        data.list.map((title) => (
          <Link
            to={`/title/${title.id}`}
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(setSearch(""));
              setValue("");
            }}
          >
            <div className={styles.card} key={title.id}>
              <img src={IMG_URL + title.posters.small.url} alt="" />
              <div className={styles.info}>
                <p className={styles.title}>{title.names.ru}</p>
                <p className={styles.titleEn}>{title.names.en}</p>
              </div>
              <p className={styles.stars}>
                <StarSVG />
                {title.in_favorites}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};
