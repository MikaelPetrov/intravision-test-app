import styles from "./Card.module.scss";

export function getStatusColor(statusRgb: string, statusName: string) {
  return (
    <div className={styles["card__icon"]} style={{ background: statusRgb }}>
      {statusName}
    </div>
  );
}
