import { Drawer } from "antd";
import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { setOpen } from "../../shared/store/burgerSlice";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";
export const BurgerMenu = () => {
  const dispatch = useAppDispatch();
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
          <Link to="/">Anime</Link>
          <Link to="/">Random Anime</Link>
          <Link to="/">Top Anime</Link>
          <button>Регистрация</button>
        </div>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
