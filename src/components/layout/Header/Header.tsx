import { memo } from "react";
import nounSearch from "../../../assets/icons/nounSearch.png";
import styles from "./Header.module.scss";

const AppHeader: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__search"]}>
        <input type="text" className={styles["header__input"]} />
        <img src={nounSearch} alt="search" className={styles["header__icon"]} />
      </div>
    </div>
  );
};

export default memo(AppHeader);
