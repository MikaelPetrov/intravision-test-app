import { memo } from "react";
import { TypeTasks } from "../types";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

type Props = {
  tasks: TypeTasks[];
  activeId: number;
};

const Cards: React.FC<Props> = (props) => {
  return (
    <div className={styles["cards"]}>
      <div className={styles["header"]}>
        <div className={styles["header__id"]}>ID</div>
        <div className={styles["header__name"]}>Название</div>
        <div className={styles["header__status"]}>Статус</div>
        <div className={styles["header__executor"]}>Исполнитель</div>
      </div>
      <div className={styles["border"]} />
      <div className={styles["content"]}>
        <Card tasks={props.tasks} activeId={props.activeId} />
      </div>
    </div>
  );
};

export default memo(Cards);
