import { memo } from "react";
import nounSearch from "../../../assets/icons/nounSearch.png";
import styles from "./Header.module.scss";

const AppHeader: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__search"]}>
        <input className={styles["header__input"]} type="text" />
        <img className={styles["header__icon"]} src={nounSearch} alt="search" />
      </div>
    </div>
  );
};

export default memo(AppHeader);
