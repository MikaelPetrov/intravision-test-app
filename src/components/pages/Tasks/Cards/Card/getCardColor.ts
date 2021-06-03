import classNames from "classnames";
import styles from "./Card.module.scss";

export function getCardColor(id: number, activeId: number) {
  return classNames(styles["card"], {
    [styles["card_active"]]: id === activeId,
  });
}
