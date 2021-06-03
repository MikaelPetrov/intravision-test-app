import classNames from "classnames";
import styles from "./Card.module.scss";
import { CRITICAL, HIGH, LESSER, LOW, MIDDLE } from "./constants";

export function getPriorityColor(priorityId: number) {
  return classNames(styles["card__priority"], {
    [styles["card__priority_lesser"]]: `${priorityId}` === LESSER,
    [styles["card__priority_low"]]: `${priorityId}` === LOW,
    [styles["card__priority_middle"]]: `${priorityId}` === MIDDLE,
    [styles["card__priority_high"]]: `${priorityId}` === HIGH,
    [styles["card__priority_critical"]]: `${priorityId}` === CRITICAL,
  });
}
