import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { BurgerSVG } from "../../shared/assets/BurgerSVG";
import { SearchSVG } from "../../shared/assets/SearchSVG";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { setOpen } from "../../shared/store/burgerSlice";
import { useGetRandomTitleQuery } from "../../shared/api/trending.api";
import SkeletonLinks from "../../shared/ui/skeleton/SkeletonLinks";
export const Header = () => {
  const { data, isLoading, refetch } = useGetRandomTitleQuery();
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <Link to="/">
        <p className={styles.title}>
          Ani
          <span className={styles.logo}>Map</span>
        </p>
      </Link>

      <div className={styles.links}>
        {isLoading &&
          Array(3)
            .fill(0)
            .map((_, index) => <SkeletonLinks key={index} />)}
        {data && (
          <>
            <Link to="/catalog">Catalog</Link>
            <Link to={`/title/${data.id}`} onClick={() => refetch()}>
              Random Anime
            </Link>
            <Link to="/">Top Anime</Link>
          </>
        )}
      </div>
      <div className={styles.public}>
        <div className={styles.search}>
          <SearchSVG />
        </div>
        <input type="text" placeholder="Search anime" />
        <button>Registration</button>
        <div onClick={() => dispatch(setOpen(true))} className={styles.burger}>
          <BurgerSVG />
        </div>
      </div>
    </header>
  );
};
