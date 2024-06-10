import { useParams } from "react-router-dom";
import styles from "./TitlePage.module.scss";
import { useGetTitleQuery } from "../../shared/api/trending.api";
import { IMG_URL } from "../../shared/api/urlValues";
export const TitlePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTitleQuery(id as string);

  return (
    <div className={styles.container}>
      {data && <img src={`${IMG_URL}${data.posters.medium.url}`} alt="" />}
    </div>
  );
};
