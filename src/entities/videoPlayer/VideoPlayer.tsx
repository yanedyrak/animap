import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.scss";
import { TitleT } from "../../shared/types";
import { VIDEO_URL } from "../../shared/api/urlValues";
import { useState } from "react";

export const VideoPlayer = ({ title }: { title: TitleT }) => {
  const [episode, setEpisode] = useState(0);
  return (
    <div className={styles.container}>
      <select
        className={styles.selectEpisode}
        onChange={(e) => setEpisode(Number(e.target.value))}
      >
        {title.player.list.map((el, index) => (
          <option key={index} value={index}>
            {el.episode} - {el.name ? el.name : "Episode"}
          </option>
        ))}
      </select>
      <ReactPlayer
        style={{
          borderRadius: "40px",
          overflow: "hidden",
          margin: "0 auto",
        }}
        width={"100%"}
        height={"100%"}
        controls
        url={`${VIDEO_URL}${
          title.player.list[episode].hls.fhd
            ? title.player.list[episode].hls.fhd
            : title.player.list[episode].hls.hd
            ? title.player.list[episode].hls.hd
            : title.player.list[episode].hls.sd
        }`}
      />
    </div>
  );
};
