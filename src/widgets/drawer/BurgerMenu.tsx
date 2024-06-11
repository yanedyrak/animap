import { Drawer } from "antd";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { setOpen } from "../../shared/store/burgerSlice";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";
import { useGetRandomTitleQuery } from "../../shared/api/trending.api";
export const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { data, refetch } = useGetRandomTitleQuery();
  const open = useAppSelector((state) => state.burger.value);
  return (
    <>
      <Drawer
        placement={"right"}
        width={800}
        onClose={() => dispatch(setOpen(false))}
        open={open}
      >
        <div className={styles.container}>
          {data && (
            <>
              <Link
                to="/"
                onClick={() => {
                  dispatch(setOpen(false));
                }}
              >
                Catalog
              </Link>
              <Link
                to={`/title/${data?.id}`}
                onClick={() => {
                  dispatch(setOpen(false));
                  refetch();
                }}
              >
                Random Anime
              </Link>
              <Link
                to=""
                onClick={() => {
                  dispatch(setOpen(false));
                }}
              >
                Top Anime
              </Link>
              <button
                onClick={() => {
                  dispatch(setOpen(false));
                }}
              >
                Регистрация
              </button>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
