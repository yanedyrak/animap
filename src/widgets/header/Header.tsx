import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { BurgerSVG } from "../../shared/assets/BurgerSVG";
import { SearchSVG } from "../../shared/assets/SearchSVG";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { setOpen } from "../../shared/store/burgerSlice";
export const Header = () => {
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
        <Link to="/catalog">Catalog</Link>
        <Link to="/">Random Anime</Link>
        <Link to="/">Top Anime</Link>
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
