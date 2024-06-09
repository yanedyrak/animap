import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>
        Ani
        <span className={styles.logo}>Map</span>
      </p>
      <div className={styles.links}>
        <Link to="/">Anime</Link>
        <Link to="/">Manga</Link>
        <Link to="/">Random Anime</Link>
        <Link to="/">Top Anime</Link>
        <Link to="/">Friends</Link>
      </div>
      <div className={styles.public}>
        <input type="text" placeholder="Search anime" />
        <button>Registration</button>
      </div>
    </header>
  );
};
