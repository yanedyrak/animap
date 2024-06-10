import { IMG_URL } from "../../shared/api/urlValues";
import { TitleT } from "../../shared/types";
import styles from "./Card.module.scss";
export const Card = ({ title }: { title: TitleT }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.title}>{title.names.ru}</p>
        <div className={styles.info}>
          <p className={styles.text}>{title.status.string}</p>
          <p className={styles.text}>{title.season.year}</p>
        </div>
        <p className={styles.textAbout}>
          {title.player.episodes.last && title.player.episodes.last}
          {title.player.episodes.last && title.player.episodes.last > 1
            ? " episodes"
            : " episode"}
        </p>
      </div>
      <img
        className={styles.img}
        src={`${IMG_URL}${title.posters.medium.url}`}
        alt="title image"
      />
    </div>
  );
}; //
