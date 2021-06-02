import { Dispatch, memo } from "react";
import { TypeAction, TypeThunk } from "../../../../redux/reducers/tasksReducer";
import { TypeTasks } from "../types";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

type Props = {
  tasks: TypeTasks[];
  dispatch: Dispatch<TypeThunk | TypeAction>;
  setModalMode: Dispatch<React.SetStateAction<string>>;
};

const Cards: React.FC<Props> = (props) => {
  return (
    <div className={styles["cards"]}>
      <div className={styles["cards__headers"]}>
        <div className={styles["cards__id"]}>ID</div>
        <div className={styles["cards__name"]}>Название</div>
        <div className={styles["cards__status"]}>Статус</div>
        <div className={styles["cards__executor"]}>Исполнитель</div>
      </div>
      <div className={styles["cards__border"]} />
      <div className={styles["cards__content"]}>
        {props.tasks.map((task: any) => (
          <Card
            key={task.id}
            dispatch={props.dispatch}
            setModalMode={props.setModalMode}
            {...task}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Cards);
