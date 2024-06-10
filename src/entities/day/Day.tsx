import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { setDay } from "../../shared/store/daySlice";
import styles from "./Day.module.scss";
export const Day = ({ children }: { children: string }) => {
  const dispatch = useAppDispatch();
  const day = useAppSelector((state) => state.day.value);
  return (
    <button
      onClick={() => dispatch(setDay(children))}
      className={`${day === children ? styles.active : ""} ${styles.button}`}
    >
      {children}
    </button>
  );
};
