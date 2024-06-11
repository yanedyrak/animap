import { Link, useParams } from "react-router-dom";
import styles from "./TitlePage.module.scss";
import { useGetTitleQuery } from "../../shared/api/trending.api";
import { IMG_URL } from "../../shared/api/urlValues";
import { StarSVG } from "../../shared/assets/StarSVG";
import SkeletonLinks from "../../shared/ui/skeleton/SkeletonLinks";
import Skeleton from "../../shared/ui/skeleton/Skeleton";
import { VideoPlayer } from "../../entities/videoPlayer/VideoPlayer";

export const TitlePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTitleQuery(id as string);

  return (
    <div className={styles.container}>
      <Link to="/">
        <p className={styles.back}>{"<"} Back</p>
      </Link>
      {isLoading && (
        <>
          <SkeletonLinks width={"80%"} height="100px" />
          <SkeletonLinks width="60%" height="100px" />
          <div className={styles.content}>
            <Skeleton />
            <Skeleton width="50%" height="50%" />
          </div>
        </>
      )}
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
          <VideoPlayer title={data} />
        </>
      )}
    </div>
  );
};
