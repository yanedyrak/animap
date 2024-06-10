import { Day } from "../../entities/day/Day";
import { useGetAnnounceQuery } from "../../shared/api/trending.api";
import { days } from "../../shared/days";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import SkeletonAnnounce from "../../shared/ui/skeleton/SkeletonAnnounce";
import styles from "./Announce.module.scss";
import Carousel from "react-multi-carousel";
export const Announce = () => {
  const responsive = {
    ultraDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1234 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1234, min: 750 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 750, min: 590 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 590, min: 0 },
      items: 1,
    },
  };
  const dayValue = useAppSelector((state) => state.day.value);
  const dayIndex = days.indexOf(dayValue);
  const { data, isLoading } = useGetAnnounceQuery(dayIndex);
  return (
    <>
      <p className={styles.title}>Announce</p>
      <Carousel
        autoPlay
        autoPlaySpeed={5000}
        className={styles.carousel}
        responsive={responsive}
        arrows={false}
        infinite
      >
        {days.map((day) => (
          <Day key={day} children={day} />
        ))}
      </Carousel>
      {isLoading &&
        Array(4)
          .fill(0)
          .map((_, index) => <SkeletonAnnounce key={index} />)}
      <div className={styles.announceList}>
        {data &&
          data[0].list.map((item: any) => (
            <div key={item.id} className={styles.announce}>
              <div>
                <p className={styles.titleName}>{item.names.ru}</p>
                <p>{item.names.en}</p>
              </div>
              <div className={styles.extra}>{item.announce}</div>
              <div className={styles.episodes}>
                {item.player.episodes.last} episode
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
