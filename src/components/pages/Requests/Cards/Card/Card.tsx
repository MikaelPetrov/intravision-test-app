import classNames from "classnames";
import { memo } from "react";
import Dotdotdot from "react-dotdotdot";
import styles from "./Card.module.scss";

const Card: React.FC = () => {
  function getStatusClassNames() {
    return classNames(styles["cards__card-status"], {
      [styles["cards__card-status_opened"]]: "d",
    });
  }
  console.log(getStatusClassNames);

  return (
    <div className={styles["card"]}>
      <div className={styles["card__color"]} />
      <div className={styles["card__id"]}>67 304</div>
      <div className={styles["card__name"]}>
        <Dotdotdot clamp={2}>
          Просьба оценить разработку рекламного баннера на новорижском шоссе.
          Форматы 600х500х300asdadsssss
        </Dotdotdot>
      </div>
      <div className={styles["card__status"]}>
        <div className={styles["card__status_red"]}>выполнена</div>
      </div>
      <div className={styles["card__executor"]}>Менеджеров Сергей</div>
    </div>
  );
};

export default memo(Card);
