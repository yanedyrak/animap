import { IMG_URL } from "../../shared/api/urlValues";
import { TitleT } from "../../shared/types";
import styles from "./Card.module.scss";
export const Card = ({ title }: { title: TitleT }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.title}>{title.names.ru}</p>
        <div>
          <p>{title.status.string}</p>
          <p>{title.season.year}</p>
        </div>

        <p>
          {title.type.episodes}
          {title.type.episodes > 1 ? " episodes" : " episode"}
        </p>
      </div>
      <img src={`${IMG_URL}${title.posters.medium.url}`} alt="" />
    </div>
  );
}; //
