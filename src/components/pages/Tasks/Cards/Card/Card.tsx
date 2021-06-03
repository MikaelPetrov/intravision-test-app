import { memo } from "react";
import Dotdotdot from "react-dotdotdot";
import { useDispatch } from "react-redux";
import { actions, thunks } from "../../../../../redux/reducers/tasksReducer";
import { UPDATE } from "../../constants";
import { TypeTasks } from "../../types";
import styles from "./Card.module.scss";
import { getCardColor } from "./getCardColor";
import { getPriorityColor } from "./getPriorityColor";
import { getStatusColor } from "./getStatusColor";

type Props = {
  tasks: TypeTasks[];
  activeId: number;
};

const Card: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function openChangeTaskModal(id: number) {
    dispatch(thunks.getInfo(id));
    dispatch(actions.setActiveId(id));
    dispatch(actions.setModalMode(UPDATE));
  }

  return (
    <>
      {props.tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => openChangeTaskModal(task.id)}
          className={getCardColor(task.id, props.activeId)}
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
