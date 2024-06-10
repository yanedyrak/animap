import { Card } from "../../entities/card/Card";
import { useGetUpdatesQuery } from "../../shared/api/trending.api";
import { TitleT } from "../../shared/types";
import Skeleton from "../../shared/ui/skeleton/Skeleton";
import styles from "./Catalog.module.scss";

export const Catalog = () => {
  const { data, isLoading } = useGetUpdatesQuery({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return (
    <div className={styles.container}>
      {isLoading
        ? Array(10)
            .fill(0)
            .map((_, index) => <Skeleton key={index} />)
        : data.list.map((title: TitleT) => (
            <Card key={title.id} title={title} />
          ))}
    </div>
  );
};
