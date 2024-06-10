import { Link, useParams } from "react-router-dom";
import styles from "./TitlePage.module.scss";
import { useGetTitleQuery } from "../../shared/api/trending.api";
import { IMG_URL } from "../../shared/api/urlValues";
import { StarSVG } from "../../shared/assets/StarSVG";
export const TitlePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTitleQuery(id as string);

  return (
    <div className={styles.container}>
      <Link to="/">
        <p className={styles.back}>{"<"} Back</p>
      </Link>
      {data && (
        <>
          <p className={styles.title}>{data.names.ru}</p>
          <p className={styles.titleEn}>{data.names.en}</p>
          <div className={styles.content}>
            <div className={styles.titleInfo}>
              <div className={styles.info}>
                <div>
                  <div className={styles.moreInfo}>
                    <StarSVG />
                    <p>{data.in_favorites}</p>
                    <p>{data.status.string}</p>
                    <p>{data.season.year}</p>
                  </div>
                  <img
                    src={`${IMG_URL}${data.posters.medium.url}`}
                    className={styles.img}
                    alt="title page"
                  />
                </div>
              </div>
            </div>
            <div className={styles.description}>{data.description}</div>
          </div>
        </>
      )}
    </div>
  );
};
