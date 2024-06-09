import { URLIMG } from "../../shared/api/urlValues";
import { TitleT } from "../../shared/types";
import styles from "./Card.module.scss";
export const Card = ({ title }: { title: TitleT }) => {
  return (
    <div className={styles.container}>
      <img src={`${URLIMG}${title.posters.medium.url}`} alt="" />
      <p className={styles.title}>{title.names.ru}</p>
      <p>
        {title.type.episodes}
        {title.type.episodes > 1 ? " episodes" : " episode"}
      </p>
    </div>
  );
}; //
