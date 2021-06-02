import classNames from "classnames";
import { Dispatch, memo } from "react";
import Dotdotdot from "react-dotdotdot";
import {
  thunks,
  TypeAction,
  TypeThunk,
} from "../../../../../redux/reducers/tasksReducer";
import { UPDATE } from "../../constants";
import { TypeTasks } from "../../types";
import styles from "./Card.module.scss";
import { CRITICAL, HIGH, LESSER, LOW, MIDDLE } from "./constants";

type Props = {
  dispatch: Dispatch<TypeThunk | TypeAction>;
  setModalMode: Dispatch<React.SetStateAction<string>>;
};

const Card: React.FC<Props & TypeTasks> = (props) => {
  function getPriorityColorClassNames() {
    return classNames(styles["card__priority"], {
      [styles["card__priority_lesser"]]: `${props.priorityId}` === LESSER,
      [styles["card__priority_low"]]: `${props.priorityId}` === LOW,
      [styles["card__priority_middle"]]: `${props.priorityId}` === MIDDLE,
      [styles["card__priority_high"]]: `${props.priorityId}` === HIGH,
      [styles["card__priority_critical"]]: `${props.priorityId}` === CRITICAL,
    });
  }

  function getStatusColor() {
    return (
      <div
        className={styles["card__icon"]}
        style={{ background: `${props.statusRgb}` }}
      >
        <div>{props.statusName}</div>
      </div>
    );
  }

  function openChangeTaskModal() {
    props.setModalMode(UPDATE);
    props.dispatch(thunks.getInfo(props.id));
  }

  return (
    <div onClick={openChangeTaskModal} className={styles["card"]}>
      <div className={getPriorityColorClassNames()} />
      <div className={styles["card__id"]}>{props.id}</div>
      <div className={styles["card__name"]}>
        <Dotdotdot clamp={2}>{props.name}</Dotdotdot>
      </div>
      <div className={styles["card__status"]}>{getStatusColor()}</div>
      <div className={styles["card__executor"]}>{props.executorName}</div>
    </div>
  );
};

export default memo(Card);
