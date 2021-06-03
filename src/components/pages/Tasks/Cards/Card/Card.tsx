import classNames from "classnames";
import { memo } from "react";
import Dotdotdot from "react-dotdotdot";
import { useDispatch } from "react-redux";
import { actions, thunks } from "../../../../../redux/reducers/tasksReducer";
import { UPDATE } from "../../constants";
import { TypeTasks } from "../../types";
import styles from "./Card.module.scss";
import { CRITICAL, HIGH, LESSER, LOW, MIDDLE } from "./constants";

type Props = {
  tasks: TypeTasks[];
  activeId: number;
};

const Card: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function getCardColor(id: number) {
    return classNames(styles["card"], {
      [styles["card_active"]]: id === props.activeId,
    });
  }

  function getPriorityColor(priorityId: number) {
    return classNames(styles["card__priority"], {
      [styles["card__priority_lesser"]]: `${priorityId}` === LESSER,
      [styles["card__priority_low"]]: `${priorityId}` === LOW,
      [styles["card__priority_middle"]]: `${priorityId}` === MIDDLE,
      [styles["card__priority_high"]]: `${priorityId}` === HIGH,
      [styles["card__priority_critical"]]: `${priorityId}` === CRITICAL,
    });
  }

  function getStatusColor(statusRgb: string, statusName: string) {
    return (
      <div className={styles["card__icon"]} style={{ background: statusRgb }}>
        {statusName}
      </div>
    );
  }

  function openChangeTaskModal(id: number) {
    dispatch(actions.setActiveId(id));
    dispatch(actions.setModalMode(UPDATE));
    dispatch(thunks.getInfo(id));
  }

  return (
    <>
      {props.tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => openChangeTaskModal(task.id)}
          className={getCardColor(task.id)}
        >
          <div className={getPriorityColor(task.priorityId)} />
          <div className={styles["card__id"]}>{task.id}</div>
          <Dotdotdot clamp={2} className={styles["card__name"]}>
            {task.name}
          </Dotdotdot>
          <div className={styles["card__status"]}>
            {getStatusColor(task.statusRgb, task.statusName)}
          </div>
          <div className={styles["card__executor"]}>{task.executorName}</div>
        </div>
      ))}
    </>
  );
};

export default memo(Card);
